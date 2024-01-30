const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'templates'),
    filename: 'Bundle/Script.txt'
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
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src") 
        ],
        use: [
          {
            loader: 'embedded-loader',
          }
        ]
      },
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
      },
      {
        test: /\.(jpg|png|gif|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content, mimetype, encoding, resourcePath) => {
                const localPrefix = path.join(__dirname,'./local/asset/filepath/prefix/');
                const remotePrefix = 'https://cdn/url/prefix/';
                return resourcePath.replace(localPrefix, remotePrefix).replaceAll('\\', '/');
              },
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'Bundle/Style.txt' }),
  ],
  resolveLoader: {
    alias: {
      'embedded-loader': path.resolve(__dirname, 'src/embedded-loader.js'),
    },
  },
}