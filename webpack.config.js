const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      options: path.resolve(__dirname, 'src/options'),
      content: path.resolve(__dirname, 'src/content'),
      constants: path.resolve(__dirname, 'src/constants'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  entry: {
    content: path.resolve(__dirname, 'src/content/content.js'),
    options: path.resolve(__dirname, 'src/options/options.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name]/[name].bundle.js',
  },
  // https://stackoverflow.com/a/49100966/5323344
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: '**/*.html',
          context: path.resolve(__dirname, 'src', 'options'),
          to: 'options',
        },
        {
          from: '**/*.css',
          context: path.resolve(__dirname, 'src', 'options'),
          to: 'options',
        },
        {
          from: path.resolve(__dirname, 'manifest.json'),
        },
        {
          from: '**/*.png',
          context: path.resolve(__dirname, 'icons'),
          to: 'icons',
        },
      ],
    }),
  ],
};
