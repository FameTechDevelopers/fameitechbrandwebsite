/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack: (config, { isServer }) => {
        // Add the rule for video files
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|avi)$/,
          use: 'file-loader',
        });
        return config
    }

};

export default nextConfig;
