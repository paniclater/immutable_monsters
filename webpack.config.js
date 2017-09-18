const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/object-oriented/index.js',
  // entry: './src/immutable/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'svg-inline-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Immutable Monsters',
      favicon: './src/svg/legs.svg'
    })
  ]
};