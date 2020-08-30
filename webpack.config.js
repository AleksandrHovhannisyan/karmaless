const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      options: path.resolve(__dirname, 'src/options'),
      constants: path.resolve(__dirname, 'src/constants'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  entry: {
    content: path.resolve(__dirname, 'src/content.js'),
    options: path.resolve(__dirname, 'src/options/options.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/**/*.html'),
          to: path.join(__dirname, 'dist/static'),
        },
        {
          from: path.join(__dirname, 'src/**/*.css'),
          to: path.join(__dirname, 'dist/static'),
        },
      ],
    }),
  ],
};
