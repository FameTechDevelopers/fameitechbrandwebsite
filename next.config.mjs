/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fameitech.com',
            port: '',
            pathname: '/portfolio/logodesigns/**',
          },
          {
            protocol: 'https',
            hostname: 'fameitech.com',
            port: '',
            pathname: '/portfolio/artandillustration/**',
          },
          {
            protocol: 'https',
            hostname: 'fameitech.com',
            port: '',
            pathname: '/portfolio/b2b/**',
          },
          {
            protocol: 'https',
            hostname: 'fameitech.com',
            port: '',
            pathname: '/portfolio/websites/**',
          },
        ],
      },
};

export default nextConfig;
