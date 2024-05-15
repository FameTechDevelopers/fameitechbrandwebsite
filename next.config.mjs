/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add the rule for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi)$/,
      use: 'file-loader',
    });
    return config
},
    images: {
      domains:['cdn-ikpnlcj.nitrocdn.com','flagcdn.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gallery.famewheels.com',
            port: '',
            pathname: '/portfolio/logodesigns/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn-ikpnlcj.nitrocdn.com',
            port: '',
            pathname: '/about-us/**',
          },
          {
            protocol: 'https',
            hostname: 'gallery.famewheels.com',
            port: '',
            pathname: '/portfolio/artandillustration/**',
          },
          {
            protocol: 'https',
            hostname: 'gallery.famewheels.com',
            port: '',
            pathname: '/portfolio/b2b/**',
          },
          {
            protocol: 'https',
            hostname: 'gallery.famewheels.com',
            port: '',
            pathname: '/portfolio/websites/**',
          },
        ],
      },
};

export default nextConfig;
