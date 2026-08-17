import { z } from 'zod';

const envSchema = z.object({
  TURNSTILE_SECRET_KEY: z.string().min(1, 'TURNSTILE_SECRET_KEY is required'),
  SMTP_HOST: z.string().min(1, 'SMTP_HOST is required'),
  SMTP_PORT: z.string().min(1, 'SMTP_PORT is required'),
  SMTP_SECURE: z.string().min(1, 'SMTP_SECURE is required'),
  SMTP_USER: z.string().email('SMTP_USER must be a valid email'),
  SMTP_PASS: z.string().min(1, 'SMTP_PASS is required'),
  CONTACT_EMAIL: z.string().email('CONTACT_EMAIL must be a valid email'),
});

export const env = envSchema.parse({
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_SECURE: process.env.SMTP_SECURE,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
});
