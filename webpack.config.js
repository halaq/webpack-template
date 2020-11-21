const common = require("./webpack/webpack.common.js");
const { merge } = require("webpack-merge");

const envs = {
  development: "dev",
  production: "prod",
};

const env = envs[process.env.NODE_ENV || "development"];

/* eslint-disable global-require,import/no-dynamic-require */
const envConfig = require(`./webpack/webpack.${env}.js`);

module.exports = merge(common, envConfig);