const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const dir = path.resolve(__dirname) + "/app";

module.exports = (env, argv) => ({
  mode: "development",
  entry: {
    app: dir + "/src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: "./bundles/",
    path: dir + "/../public/bundles",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_(.*)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
        components: {
          test: /[\\/]src[\\/]components[\\/]/,
          name: "components",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          // sass-loader
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      { from: dir + "/index.html", to: dir + "/../public/index.html" },
      { from: dir + "/assets", to: dir + "/../public/assets" },
      // { from: dir + "/styles", to: dir + "/../public/styles" },
    ]),
  ],
});
