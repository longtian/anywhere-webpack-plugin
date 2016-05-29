module.exports = {
  entry: [
    __dirname+'/../index.js',
    __dirname + '/src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jpg$/,
      loader: 'file'
    }]
  }
}