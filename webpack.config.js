const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [ {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    } ]
  },
  resolve: {
    extensions: [ '*', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: './dist'
  }
};
