const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")
module.exports = {
  entry: './scss/style.scss',
  output: {
    path: path.resolve(__dirname, 'templates')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'Style.txt' }),
    new FixStyleOnlyEntriesPlugin(),
  ]
}