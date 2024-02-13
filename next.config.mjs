const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    webpack: (nextConfig) => {
        nextConfig.resolve.alias.canvas = false;
        return nextConfig;
    },
};

export default nextConfig;
