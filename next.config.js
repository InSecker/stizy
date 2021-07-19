const composePlugins = require('next-compose-plugins');
const svgPlugin = require('next-svgr');

module.exports = composePlugins([svgPlugin], {
  reactStrictMode: true,
});
