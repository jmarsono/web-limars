// app/api/media/route.js
export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file) {
    return new Response('Missing file parameter', { status: 400 });
  }

  const context = globalThis[Symbol.for('cloudflare-context')];
  if (!context?.env?.MEDIA_BUCKET) {
    return new Response('R2 binding MEDIA_BUCKET not found', { status: 500 });
  }

  try {
    const object = await context.env.MEDIA_BUCKET.get(file);
    if (!object) {
      return new Response('File not found', { status: 404 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable'); // Cache for 1 year

    return new Response(object.body, {
      headers,
    });
  } catch (e) {
    console.error('Error fetching media from R2:', e);
    return new Response('Internal Server Error', { status: 500 });
  }
}
