// module bundler . Inteligently bundles all the files that we can access in index.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const options = {
  extensions: ['js', 'jsx'],
  exclude: [
    '/node_modules/',
    '/bower_components/',
  ],
};
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        options: {
          esModule: true,
        },
        type: 'javascript/auto',
      },
    ],

  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new ESLintPlugin(options),
  ],
};
