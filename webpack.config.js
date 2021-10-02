const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
  },
};

// const path = require("path");

// module.exports = {
//   entry: path.resolve(__dirname, "./src/index.js"),
//   output: { , filename: "bundle.js" },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: "babel-loader",
//         exclude: "/node_modules/",
//       },
//       { test: /\.css?$/, use: ["style-loader", "css-loader"] },
//     ],
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, "./src"),
//     historyApiFallback: true,
//   },
//   mode: "development",
//   resolve: {
//     extensions: ["*", ".js"],
//   },
// };
