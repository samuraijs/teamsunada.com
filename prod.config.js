// const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: __dirname + '/public',
    // publicPath: './public',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(ttf)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'www.teamsunada.com',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
  ],
};
