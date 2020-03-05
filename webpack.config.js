const path = require('path');
module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader'],

      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  watch: true
}
