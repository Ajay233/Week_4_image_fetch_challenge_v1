const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    // We invoke babel on any file that ends in .js before webpack includes them in the bundle
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
