const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'templates'),
    filename: 'Script.txt'
  },
  optimization: {
    minimize: true, 
    minimizer: [
      new TerserPlugin({
        test: /Script.*\.txt$/,
        extractComments: false,
        terserOptions: {
          compress: { drop_console: true },
        }
      })
    ],
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
  ]
}