import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      }
    ]
  }
};

const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};

// module.exports = nextConfig;

export default million.next(nextConfig, millionConfig);
