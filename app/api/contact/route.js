/** API Route: Contact Form Handler */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { env } from '../../../lib/env';

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 40,
  company: 160,
  service: 120,
  message: 5000,
};

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039;');
}

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const payload = await req.json();

    const name = clean(payload.name, MAX_LENGTHS.name);
    const email = clean(payload.email, MAX_LENGTHS.email).toLowerCase();
    const phone = clean(payload.phone, MAX_LENGTHS.phone);
    const company = clean(payload.company, MAX_LENGTHS.company);
    const service = clean(payload.service, MAX_LENGTHS.service);
    const message = clean(payload.message, MAX_LENGTHS.message);
    const turnstileToken = clean(payload.turnstileToken, 4096);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!turnstileToken || !env.TURNSTILE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Verification is temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    const turnstileRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: 'Verification failed. Please try again.' },
        { status: 400 }
      );
    }

    if (!env.SMTP_USER || !env.SMTP_PASS) {
      console.error('Contact form SMTP credentials are not configured.');
      return NextResponse.json(
        { error: 'The contact form is temporarily unavailable. Please contact us via WhatsApp.' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(env.SMTP_PORT || 587),
      secure: env.SMTP_SECURE === 'true',
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });

    const contactEmail = env.CONTACT_EMAIL || 'sales@limarsteknik.com';
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'N/A');
    const safeCompany = escapeHtml(company || 'N/A');
    const safeService = escapeHtml(service || 'N/A');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const adminMailOptions = {
      from: `"PT. Limars Teknik Indonesia" <${env.SMTP_USER}>`,
      replyTo: email,
      to: contactEmail,
      subject: `New Lead: ${service ? `[${service}] ` : ''}Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Service Interest:</strong> ${safeService}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    };

    const customerMailOptions = {
      from: `"PT. Limars Teknik Indonesia" <${env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting PT. Limars Teknik Indonesia',
      html: `
        <h3>Dear ${safeName},</h3>
        <p>Thank you for reaching out to us. We have received your inquiry regarding <strong>${safeService}</strong>.</p>
        <p>Our team is currently reviewing your message and will get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,<br/>
          <strong>PT. Limars Teknik Indonesia</strong><br/>
          <a href="https://limarsteknik.com">limarsteknik.com</a></p>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}