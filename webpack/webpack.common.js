module.exports = {
  // Determines how the different types of modules within the project will be treated.
  module: {
    rules: [
      /**
       * Loaders are how your static assets are loaded into Webpack.
       * If you are using .js files instead of .jsx files, you can correct the configuration
       * by replacing /\.jsx$/ with /\.js$/ on “test” as shown below.
       */
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      /** 
         *  If your project includes local style files, you can load them by the following configuration:
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      /**
         * If you are using .sass files instead of .css files, you can correct the configuration 
         * by replacing /\.css$/ with /\.sass$/ on the field “test” as shown below. 
         * 
            {
                test: /\.sass$/,
                use: ['style-loader', 'sass-loader']
            },
         */
      /**
         * If your project includes local images files, you can load them by the following configuration:
         * 
           {
            test: /\.(png|jpg|gif|svg|otf|ico)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                    name: commonPaths.imgsFolder + "/[name].[ext]"
                    }
                },
                {
                    loader: "image-webpack-loader",
                    options: {
                    name: commonPaths.imgsFolder + "/[name].[ext]",
                    disable: true // webpack@2.x and newer
                    }
                }
                ]
            },
         */
      /**
         * If your project includes local font files, you can load them by the following configuration:
         * 
           {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: commonPaths.fontsFolder + "/[name].[ext]"
                    }
                }
            }
         */
    ],
  },
  /**
   * Configure how modules are resolved. Attempt to resolve these extensions in order.
   * i.e If multiple files share the same name but have different extensions,
   * webpack will resolve the one with the extension listed first in the array and skip the rest.
   */
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
