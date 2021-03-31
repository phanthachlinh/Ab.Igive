const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

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

      },
      {
        test: /\.(woff)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  watch: true,
  optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
  plugins: [
    new MiniCssExtractPlugin({
          filename: 'style.css',
    }),
    
  ],
}
