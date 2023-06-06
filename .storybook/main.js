const {
  resolve
} = require('path');
module.exports = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@storybook/addon-a11y/register", 
    "@storybook/addon-viewport/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules : "icss"
        },
      }, {
        loader: 'sass-loader'
      }],
      include: resolve(__dirname, '../')
    });
    return config;
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  }
};