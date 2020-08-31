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
  // https://stackoverflow.com/a/49100966/5323344
  devtool: 'cheap-module-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '**/*.html',
          context: path.resolve(__dirname, 'src', 'options'),
        },
        {
          from: '**/*.css',
          context: path.resolve(__dirname, 'src', 'options'),
        },
        {
          from: 'manifest.json',
          context: path.resolve(__dirname),
        },
      ],
    }),
  ],
};
