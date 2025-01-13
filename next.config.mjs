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
};
module.exports = {
    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
      return config;
    },
  };
export default nextConfig;
