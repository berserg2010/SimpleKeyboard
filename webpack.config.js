const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');

module.exports = {
  // watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1000,
  },
  entry: {
    index: `${srcPath}/index.ts`,
  },
  mode: 'development',
  output: {
    path: distPath,
    filename: '[name]-[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // SCSS/CSS
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // SVG
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {},
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash].css',
    }),
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      title: 'Simple keyboard',
      template: `${srcPath}/index.html`,
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: `${srcPath}/assets/fonts`, to: `${distPath}/fonts` }],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': srcPath,
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, 'dist'),
    // },
    open: true,
    compress: true,
    // hot: true,
    client: {
      overlay: true,
    },
    port: 8888,
  },
};
