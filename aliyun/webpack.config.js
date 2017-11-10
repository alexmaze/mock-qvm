// var webpack = require("webpack")

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: __dirname,
    filename: "cli.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".json"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/\.spec\.ts/, /node_modules/],
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      }
    ]
  }
}
