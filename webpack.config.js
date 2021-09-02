const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    publicPath: '',
    path: __dirname + "/build/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new MiniCSSExtractPlugin({
      filename: "./styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          { loader: 'css-loader' },
          {loader: 'sass-loader'},
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
              useRelativePath: true,
            },
          },
        ],
      },
    ]
  }
};
