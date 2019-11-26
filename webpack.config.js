const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],

      }
    ]
  },
  watch: true
}
