const path = require('path');
const autoprefixer = require('autoprefixer')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './app/js/index.js',
  module: {
    rules: [

        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/[name][ext]', // Specify output folder for assets
              },
          },
        {
            
          test: /\.(scss)$/,
          use: [
            // MiniCssExtractPlugin.loader, // Extracts CSS into separate files

            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: 'style-loader'
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                }
              }
            },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader'
            }
          ]
        }
      ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
//   plugins: [new HtmlWebpackPlugin()],
  plugins: [
    new HtmlWebpackPlugin({ template: './app/index.html' }),
    new MiniCssExtractPlugin({
        filename: 'styles.css', // Output CSS file name
      }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};