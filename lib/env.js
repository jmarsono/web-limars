import { z } from 'zod';

const envSchema = z.object({
  TURNSTILE_SECRET_KEY: z.string().optional().default(''),
  SMTP_HOST: z.string().optional().default('smtp.gmail.com'),
  SMTP_PORT: z.string().optional().default('587'),
  SMTP_SECURE: z.string().optional().default('false'),
  SMTP_USER: z.string().optional().default(''),
  SMTP_PASS: z.string().optional().default(''),
  CONTACT_EMAIL: z.string().optional().default('sales@limarsteknik.com'),
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
