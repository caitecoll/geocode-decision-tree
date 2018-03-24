const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  devtool: 'cheap-eval-source-map',
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ],
  },
};
