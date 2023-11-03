/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                port: '',
                pathname: '/data/**',
            },
            {
                hostname: 'ollyo-task-free-host.netlify.app',
            }
        ],
    },

}

module.exports = nextConfig
