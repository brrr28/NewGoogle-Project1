const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/home/home.js",
    question: "./src/question/question.js",
    about: "./src/about/about.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/home/home.html"),
      filename: "index.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/about/about.html"),
      filename: "about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/question/question.html"),
      filename: "question.html",
      chunks: ["question"],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
