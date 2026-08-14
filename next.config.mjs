import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ugc.production.linktr.ee',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
};

export default withNextIntl(nextConfig);