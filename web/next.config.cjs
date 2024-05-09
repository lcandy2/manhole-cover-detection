import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
};

const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};

// module.exports = nextConfig;

export default million.next(nextConfig, millionConfig);
