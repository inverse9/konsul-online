/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true, // Use true (308 redirect) if this is permanent
      },
    ];
  },
};

export default nextConfig;
