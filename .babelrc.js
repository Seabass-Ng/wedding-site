const env = require('./env-config.js');

module.exports = {
  plugins: [
    ["styled-components", { "ssr": true, "displayName": true, "preprocess": false }],
    ['transform-define', env]
  ],
  presets: ["next/babel"]
};
