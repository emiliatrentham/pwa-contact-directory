const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      // One entry point that finds everything and bundles it all together 
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    // What are we spitting out? What is the name of the file and where do we want to put it?
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    // TODO: Add the correct plugins
    // Processing modules after they have been loaded
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
    ],

    // TODO: Add the correct modules
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
           // Week 19 Activity 6
          // use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    }
  };
};
