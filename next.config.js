const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const debug = process.env.NODE_ENV !== "production";
const withPWA = require('next-pwa');

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
    }
  },
  assetPrefix: !debug ? 'https://anotherplanet-io.github.io/Next-React-Components/' : '',
}

module.exports = withPWA({
  reactStrictMode: true,
  pwa:{
    dest:"public",
    swSrc:"service-worker.js",
    register:true,
    skipWaiting:true,
    disable:process.env.NODE_ENV === 'development'
  }
});

module.exports = withPlugins([optimizedImages], { target: 'serverless' });
