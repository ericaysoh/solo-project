const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(?:jsx|js)$/, /*/\.m?js$/*/
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { 
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html'),
    })
  ],
  devServer: {
    proxy: {
      '/**': 'http://localhost:3000/'
    },
  },
};