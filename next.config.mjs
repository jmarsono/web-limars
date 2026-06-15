import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6LcprocsAAAAADTwm6lBmRlvJsPT_B1-OjNznCYa',
  },
  serverExternalPackages: ['@payloadcms/db-d1-sqlite', 'drizzle-kit', 'esbuild', 'jose', '@next/env'],
};

export default withNextIntl(nextConfig);
