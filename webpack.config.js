var path = require('path');

module.exports = {
  entry: './src/slingshot.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'slingshot.js',
    library: 'slingshot',
    libraryTarget: 'umd'
  }
};