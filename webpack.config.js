const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
// const { VueLoaderPlugin } = require('vue-loader');
const { LicenseWebpackPlugin } = require("license-webpack-plugin");
const { BannerPlugin } = require('webpack');
require('dotenv').config();

const banner = `@licenses See full license information in https://example.invalid/bundle/LICENSES.txt`;

module.exports = {
  entry: {
    main:'./src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'templates'),
    filename: 'Bundle/Script.txt'
    //filename: 'Bundle/Script_[name].txt'
  },
  optimization: {
    minimize: true, 
    minimizer: [
      new TerserPlugin({
        test: /Script.*\.txt$/,
        extractComments: false,
        terserOptions: {
          compress: { drop_console: true },
          format: { comments: /@licenses/i, },
        },
      })
    ],
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   exclude: /(node_modules|etc)/,
      //   include: [
      //     path.resolve(__dirname, "src") 
      //   ],
      //   use: [
      //     {
      //       loader: 'embedded-loader',
      //     },
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         appendTsSuffixTo: [/\.vue$/],
      //       },
      //     }
      //   ]
      // }, 
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
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader'
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'cdn-url-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'Bundle/Style.txt' }),
    // new VueLoaderPlugin(),
    new BannerPlugin(banner),
    new LicenseWebpackPlugin({
      outputFilename: 'Bundle/Licenses.txt',
      perChunkOutput: false,
    }),
  ],
  resolve: {
    extensions: [
      '.js', 
      // '.ts', 
      // '.vue'
    ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      // vue$: 'vue/dist/vue.runtime.esm-bundler.js',
    }
  },
  resolveLoader: {
    alias: {
      'embedded-loader': path.resolve(__dirname, 'build', 'embedded-loader.js'),
      'cdn-url-loader': path.resolve(__dirname, 'build', 'cdn-url-loader.js'),
    },
  },
}