const webpack = require("webpack");
const commonPaths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * modes in webpack: https://webpack.js.org/configuration/mode/
   * `development`: Sets process.env.NODE_ENV on DefinePlugin to value development.
   * Enables useful names for modules and chunks. */
  mode: "development",
  // Entry is the first file or list of files that you want Webpack to start with.
  entry: {
    demo: commonPaths.demoPath,
  },
  /**
   * Output is where the files transpiled by Babel and compiled from Webpack will be sent,
   * so we will output our file as [name].js to the "build" or distribution folder.
   * for more details: https://webpack.js.org/configuration/output/ **/
  output: {
    // output filename
    filename: "[name].js",

    // output / distribution folder
    path: commonPaths.outputPath,
  },
  /**
   * devServer is set of options that can be used to change its behavior in various ways.
   * All needed details for devServer: https://webpack.js.org/configuration/dev-server/ */
  devServer: {
    historyApiFallback: true,
    contentBase: commonPaths.templatePath,
    port: 3000,
    open: true,
  },
  // Reload On File Change, Webpack will continue to watch for changes in any of the resolved files.
  watch: true,
  /** Development Tools (Map Errors To Source File),
   * Source Map will provide detailed debugging by adding meta info for the browser’s console */
  devtool: "source-map",
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      // favicon: "./webpack/favicon.ico"
    }),
  ],
};
