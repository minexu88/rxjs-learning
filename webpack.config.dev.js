const path = require('path');

module.exports = Object.assign({}, require('./webpack.common'), {
  entry: {
    'index': [path.resolve(__dirname, 'src')]
  },
  output: {
    filename: 'index.js'
  },
  devServer: {
    contentBase: __dirname,
    publicPath: 'http://localhost:9000/dist/',
    compress: true,
    hot: true,
    inline: true,
    port: 9000
  },
  mode: 'development'
});
