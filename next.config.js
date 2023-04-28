/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const fontAwesomeConfig = {
  // This ensures that the fonts load properly
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  /* your config options here */
})

module.exports = withPlugins([
  withImages,
  withFonts,
  withCSS,
], fontAwesomeConfig);


module.exports = nextConfig
