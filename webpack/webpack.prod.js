const commonPaths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let config = {
  /**
   * modes in webpack: https://webpack.js.org/configuration/mode/
   * `production`: sSets process.env.NODE_ENV on DefinePlugin to value production.
   * Enables deterministic mangled names for modules and chunks. */
  mode: "production",

  // Entry is the first file or list of files that you want Webpack to start with.
  entry: {
    lib: commonPaths.entryPath,
  },
  /**
   * Output is where the files transpiled by Babel and compiled from Webpack will be sent,
   * so we will output our file as [name].js to the "build" or distribution folder.
   * for more details: https://webpack.js.org/configuration/output/ **/
  output: {
    // output filename
    filename: `${commonPaths.jsFolder}/[name].js`,

    // output / distribution folder
    path: commonPaths.outputPath,

    /**
     * Determines the name of non-initial chunk files, these files generated at runtime to send the requests for chunks.
     */
    chunkFilename: "[id].[chunkhash].js",

    /** library is used depends on the value of the output.libraryTarget option */
    library: "lib",

    /**
     * Configure how the library will be exposed.
     * Any one of the following options can be used:
     * - Expose a Variable
     * - Expose Via Object Assignment
     * - Module Definition Systems:
     *
     * libraryTarget: 'commonjs2': The return value of your entry point will be assigned to the module.exports.
     *
     * libraryTarget: 'amd' - This will expose your library as an AMD module.
     * AMD modules require that the entry chunk (e.g. the first script loaded by the <script> tag) be defined with specific properties,
     * such as define and require which is typically provided by RequireJS or any compatible loaders (such as almond).
     *
     * libraryTarget: 'amd-require' - This packages your output with an immediately-executed AMD require(dependencies, factory) wrapper.
     *
     * libraryTarget: 'umd' - This exposes your library under all the module definitions, allowing it to work with CommonJS,
     *  AMD and as global variable. (my prefered option)
     *
     * libraryTarget: 'system' - This will expose your library as a System.register module.
     * This feature was first released in webpack 4.30.0.
     *
     * - Other Targets
     *  */
    libraryTarget: "umd",

    /**
     * When targeting a library, especially when libraryTarget is 'umd',
     * this option indicates what global object will be used to mount the library.
     * To make UMD build available on both browsers and Node.js, set output.globalObject option to 'this'.
     * Defaults to self for Web-like targets. */
    globalObject: "this",

    /**
     * This is an important option when using on-demand-loading or loading external resources like images, files, etc.
     * If an incorrect value is specified you'll receive 404 errors while loading these resources.
     * A relative URL is resolved relative to the HTML page (or <base> tag).
     * Server-relative URLs, protocol-relative URLs or absolute URLs are also possible and sometimes required,
     * i.e. when hosting assets on a CDN.
     *
     * The value of the option is prefixed to every URL created by the runtime or loaders.
     * Because of this the value of this option ends with / in most cases.
     * Simple rule: The URL of your output.path from the view of the HTML page.
     */
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // "sass-loader"
        ],
      },
    ],
  },
  optimization: {
    /*
     * this minifies your app
     * in order to load faster and run less javascript.
     *
     * https://github.com/webpack-contrib/terser-webpack-plugin
     *
     */
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
  plugins: [
    /**
     * A webpack plugin to remove/clean your build folder(s).
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     * https://www.npmjs.com/package/clean-webpack-plugin
     */
    new CleanWebpackPlugin(),
    // extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
    // https://www.npmjs.com/package/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/style.css`,
      chunkFilename: "[name].css",
    }),
    //Prepare compressed versions of assets to serve them with Content-Encoding.
    // https://www.npmjs.com/package/compression-webpack-plugin
    new CompressionPlugin(),
  ],
  // devtool: "source-map",
};

module.exports = config;
