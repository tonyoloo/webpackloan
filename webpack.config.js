const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getExtension = (filename) => {
    const parts = filename.split('.');
    return parts[parts.length - 1];
};

module.exports = (env, argv) => {
//   const isProduction = argv.mode === 'production';
  const isProduction = false;

  return {
    entry: {
      userin: './app/js/userin.js', // Ensure userin.js is included
      index: './app/js/index.js'

    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(woff|eot|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/', // Ensure fonts are served from the correct path

            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]', // Output folder for assets
          },
        },
        {
          test: /\.(scss|css)$/, // Update to include both CSS and SCSS files
          use: [
            MiniCssExtractPlugin.loader, // Extracts CSS into separate files
            'css-loader', // Interprets `@import` and `url()` like `import/require()` and will resolve them
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
            'sass-loader', // Loads a SASS/SCSS file and compiles it to CSS
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './app/userin.html',
        filename: 'userin.html',
        chunksSortMode: 'manual', // Add this line

        chunks: ['userin']
      }),
      new HtmlWebpackPlugin({
        template: './app/index.html',
        filename: 'index.html',
        chunksSortMode: 'manual', // Add this line
        chunks: ['index', 'userin'], // Ensure 'userin' is loaded before 'index'
          }),
      new MiniCssExtractPlugin({
        filename: '[name].styles.css', // Output CSS file name with unique chunk names
      }),
    ],
    stats: {
      errorDetails: true
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
      headers: {
        'Content-Security-Policy': "default-src 'none'; script-src *  ; style-src * 'unsafe-inline' http://localhost:8080; font-src * data:; img-src * data:; connect-src * ; object-src 'none'; base-uri *; form-action *;",
    },
    },
    // mode: isProduction ? 'production' : 'development',
   // devtool: isProduction ? 'source-map' : 'eval-source-map',

    mode: 'development', // Explicitly set to development mode
    devtool: 'source-map', // Use development-friendly source maps
  
  };
};
