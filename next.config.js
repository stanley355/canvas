/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    APP_ENV: process.env.APP_ENV,
  },
};

module.exports = nextConfig;
