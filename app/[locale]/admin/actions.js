// app/[locale]/admin/actions.js
'use server';

import { cookies } from 'next/headers';
import { getDB } from '../../../lib/db';
import { revalidatePath } from 'next/cache';

const SESSION_COOKIE = 'admin_session';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'limars-secret-key-987654321';

// Helper to sign session cookies using Web Crypto API
async function signSession(username, expiresAt) {
  const data = `${username}:${expiresAt}`;
  const encoder = new TextEncoder();
  const keyData = encoder.encode(SESSION_SECRET);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(data));
  const signatureHex = Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  return `${data}:${signatureHex}`;
}

// Helper to verify session cookie signatures
export async function verifySession(token) {
  if (!token) return null;
  try {
    const parts = token.split(':');
    if (parts.length !== 3) return null;
    const [username, expiresAt, signatureHex] = parts;
    
    if (Date.now() > parseInt(expiresAt)) return null; // Expired
    
    const data = `${username}:${expiresAt}`;
    const encoder = new TextEncoder();
    const keyData = encoder.encode(SESSION_SECRET);
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    
    // Convert hex string back to bytes
    const sigBytes = new Uint8Array(
      signatureHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
    );
    const isValid = await crypto.subtle.verify('HMAC', cryptoKey, sigBytes, encoder.encode(data));
    return isValid ? username : null;
  } catch (e) {
    return null;
  }
}

// Get the currently authenticated admin user
export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return await verifySession(token);
}

// LOGIN ACTION
export async function loginAction(username, password) {
  const expectedUser = process.env.ADMIN_USERNAME || 'admin';
  const expectedPass = process.env.ADMIN_PASSWORD || 'admin123';

  if (username === expectedUser && password === expectedPass) {
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 1 day
    const token = await signSession(username, expiresAt);
    
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: new Date(expiresAt),
      path: '/'
    });
    return { success: true };
  }
  return { success: false, error: 'Invalid username or password' };
}

// LOGOUT ACTION
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  return { success: true };
}

// MEDIA UPLOAD TO CLOUDFLARE R2
export async function uploadMediaAction(formData) {
  const user = await getAuthenticatedUser();
  if (!user) throw new Error('Unauthorized');

  const file = formData.get('file');
  if (!file) throw new Error('No file selected');

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const context = globalThis[Symbol.for('cloudflare-context')];
  if (!context?.env?.MEDIA_BUCKET) {
    throw new Error('R2 binding MEDIA_BUCKET not configured in Cloudflare environment.');
  }

  // Safe filename
  const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const filename = `${Date.now()}-${cleanName}`;

  await context.env.MEDIA_BUCKET.put(filename, buffer, {
    httpMetadata: { contentType: file.type }
  });

  return { 
    success: true, 
    url: `/api/media?file=${filename}`, 
    filename 
  };
}

// --- CRUD OPERATIONS ---

// PRODUCTS CRUD
export async function saveProductAction(product) {
  const user = await getAuthenticatedUser();
  if (!user) throw new Error('Unauthorized');

  const db = getDB();
  if (!db) throw new Error('Database connection unavailable');

  const {
    id, slug, name_en, name_id, category_en, category_id,
    short_description_en, short_description_id, description_en, description_id,
    specs, image, featured
  } = product;

  const specsJson = typeof specs === 'object' ? JSON.stringify(specs) : specs;

  if (id) {
    // Update
    await db.prepare(`
      UPDATE products 
      SET slug = ?, name_en = ?, name_id = ?, category_en = ?, category_id = ?, 
          short_description_en = ?, short_description_id = ?, description_en = ?, description_id = ?, 
          specs = ?, image = ?, featured = ?
      WHERE id = ?
    `).bind(
      slug, name_en, name_id, category_en, category_id,
      short_description_en, short_description_id, description_en, description_id,
      specsJson, image, featured ? 1 : 0, id
    ).run();
  } else {
    // Insert
    await db.prepare(`
      INSERT INTO products (
        slug, name_en, name_id, category_en, category_id,
        short_description_en, short_description_id, description_en, description_id,
        specs, image, featured
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      slug, name_en, name_id, category_en, category_id,
      short_description_en, short_description_id, description_en, description_id,
      specsJson, image, featured ? 1 : 0
    ).run();
  }

  revalidatePath('/products');
  revalidatePath('/[locale]/products', 'layout');
  revalidatePath('/');
  return { success: true };
}

export async function deleteProductAction(id) {
  const user = await getAuthenticatedUser();
  if (!user) throw new Error('Unauthorized');

  const db = getDB();
  if (!db) throw new Error('Database connection unavailable');

  await db.prepare('DELETE FROM products WHERE id = ?').bind(id).run();

  revalidatePath('/products');
  revalidatePath('/[locale]/products', 'layout');
  revalidatePath('/');
  return { success: true };
}

// PROJECTS CRUD
export async function saveProjectAction(project) {
  const user = await getAuthenticatedUser();
  if (!user) throw new Error('Unauthorized');

  const db = getDB();
  if (!db) throw new Error('Database connection unavailable');

  const {
    id, slug, name_en, name_id, category_en, category_id,
    location_en, location_id, description_en, description_id,
    image, scope, featured
  } = project;

  const scopeJson = typeof scope === 'object' ? JSON.stringify(scope) : scope;

  if (id) {
    await db.prepare(`
      UPDATE projects 
      SET slug = ?, name_en = ?, name_id = ?, category_en = ?, category_id = ?,
          location_en = ?, location_id = ?, description_en = ?, description_id = ?,
          image = ?, scope = ?, featured = ?
      WHERE id = ?
    `).bind(
      slug, name_en, name_id, category_en, category_id,
      location_en, location_id, description_en, description_id,
      image, scopeJson, featured ? 1 : 0, id
    ).run();
  } else {
    await db.prepare(`
      INSERT INTO projects (
        slug, name_en, name_id, category_en, category_id,
        location_en, location_id, description_en, description_id,
        image, scope, featured
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      slug, name_en, name_id, category_en, category_id,
      location_en, location_id, description_en, description_id,
      image, scopeJson, featured ? 1 : 0
    ).run();
  }

  revalidatePath('/projects');
  revalidatePath('/[locale]/projects', 'layout');
  revalidatePath('/');
  return { success: true };
}

export async function deleteProjectAction(id) {
  const user = await getAuthenticatedUser();
  if (!user) throw new Error('Unauthorized');

  const db = getDB();
  if (!db) throw new Error('Database connection unavailable');

  await db.prepare('DELETE FROM projects WHERE id = ?').bind(id).run();

  revalidatePath('/projects');
  revalidatePath('/[locale]/projects', 'layout');
  revalidatePath('/');
  return { success: true };
}

// FAQS CRUD
export async function saveFaqAction(faq) {
  const user = await getAuthenticatedUser();
  if (!user) throw new Error('Unauthorized');

  const db = getDB();
  if (!db) throw new Error('Database connection unavailable');

  const { id, category_en, category_id, question_en, question_id, answer_en, answer_id } = faq;

  if (id) {
    await db.prepare(`
      UPDATE faqs 
      SET category_en = ?, category_id = ?, question_en = ?, question_id = ?, answer_en = ?, answer_id = ?
      WHERE id = ?
    `).bind(category_en, category_id, question_en, question_id, answer_en, answer_id, id).run();
  } else {
    await db.prepare(`
      INSERT INTO faqs (category_en, category_id, question_en, question_id, answer_en, answer_id) 
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(category_en, category_id, question_en, question_id, answer_en, answer_id).run();
  }

  revalidatePath('/faq');
  revalidatePath('/[locale]/faq', 'layout');
  return { success: true };
}

export async function deleteFaqAction(id) {
  const user = await getAuthenticatedUser();
  if (!user) throw new Error('Unauthorized');

  const db = getDB();
  if (!db) throw new Error('Database connection unavailable');

  await db.prepare('DELETE FROM faqs WHERE id = ?').bind(id).run();

  revalidatePath('/faq');
  revalidatePath('/[locale]/faq', 'layout');
  return { success: true };
}
