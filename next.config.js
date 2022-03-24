const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
    }
  },
  assetPrefix: !debug ? 'https://anotherplanet-io.github.io/Next-React-Components/' : '',
}
module.exports = withPlugins([optimizedImages], { target: 'serverless' });
