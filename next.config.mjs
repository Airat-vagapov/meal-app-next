import path from 'path';
import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public', // Папка, где будут находиться файлы Service Worker
  register: true, // Автоматическая регистрация Service Worker
  skipWaiting: true, // Пропуск ожидания, чтобы сразу активировать новый SW
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonacular.com',
        port: '',
        pathname: '/recipes/**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./src');
    return config;
  },
};

export default withPWA(nextConfig);