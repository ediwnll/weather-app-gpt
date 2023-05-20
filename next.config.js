/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["weatherbit.io"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@tremor/react'],
  },
}

module.exports = nextConfig
