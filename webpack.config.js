const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  devServer: {
    port: 8080,
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "",
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/mageWiz.html',
      filename: './mageWiz.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/mageSage.html',
      filename: './mageSage.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/merchantAlchemist.html',
      filename: './merchantAlchemist.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/merchantBlacksmith.html',
      filename: './merchantBlacksmith.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/acolyteMonk.html',
      filename: './acolyteMonk.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/acolytePriest.html',
      filename: './acolytePriest.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/swordmanCrusader.html',
      filename: './swordmanCrusader.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/swordmanKnight.html',
      filename: './swordmanKnight.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/thiefAssassin.html',
      filename: './thiefAssassin.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/thiefRogue.html',
      filename: './thiefRogue.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/archerHunter.html',
      filename: './archerHunter.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/archerBard.html',
      filename: './archerBard.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/archerDancer.html',
      filename: './archerDancer.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

