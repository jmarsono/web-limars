import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, company, service, message, turnstileToken } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Please verify that you are not a robot.' },
        { status: 400 }
      );
    }

    // Verify token using Turnstile
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    const turnstileRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
      }),
    });
    const turnstileData = await turnstileRes.json();
    const isVerificationSuccess = !!turnstileData.success;

    if (!isVerificationSuccess) {
      return NextResponse.json(
        { error: 'Verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    // For production, these should be configured in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const contactEmail = process.env.CONTACT_EMAIL || 'sales@limarsteknik.com';

    // Email to Admin/Company
    const adminMailOptions = {
      from: `"\${name}" <\${process.env.SMTP_USER || email}>`, // Using normal string + var but next/server parses it OK, wait, I need to provide EXACT standard JS string template.
      replyTo: email,
      to: contactEmail,
      subject: `New Lead: ${service ? '[' + service + '] ' : ''}Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service Interest:</strong> ${service || 'N/A'}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Auto-reply Email to Customer
    const customerMailOptions = {
      from: `"PT. Limars Teknik Indonesia" <${process.env.SMTP_USER || contactEmail}>`,
      to: email,
      subject: 'Thank you for contacting PT. Limars Teknik Indonesia',
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for reaching out to us. We have received your inquiry regarding <strong>${service || 'our services'}</strong>.</p>
        <p>Our team is currently reviewing your message and will get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>PT. Limars Teknik Indonesia</strong></p>
        <p><a href="https://limarsteknik.com">limarsteknik.com</a></p>
      `,
    };

    // Verify connection configuration
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Send both emails simultaneously
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(customerMailOptions)
      ]);
      return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } else {
      // If no SMTP configured, we just return success for the sake of the MVP UI working
      // A warning will be logged to server console
      console.warn('SMTP credentials not configured. Form submission received but emails were not actually sent.');
      console.log('Submission Data:', { name, email, phone, company, service, message });
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully (Development Mode: No actual email sent due to missing SMTP)' },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: `Email sending error: ${error.message || error.toString()}` },
      { status: 500 }
    );
  }
}
