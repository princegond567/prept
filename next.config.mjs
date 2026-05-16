/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname: "randomuser.me"
      }
    ]
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['emission-twenty-flame.ngrok-free.dev', '*.ngrok-free.dev'],
    },
  },
};

export default nextConfig;
