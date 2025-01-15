import path from 'path';
/** @type {import('next').NextConfig} */

const nextConfig = {
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

export default nextConfig;
