const path = require('path');

module.exports = Object.assign({}, require('./webpack.common'), {
  entry: {
    'index': [path.resolve(__dirname, 'src')]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
});
