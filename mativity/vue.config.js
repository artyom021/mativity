const { defineConfig } = require("@vue/cli-service");

const { version } = require("./package.json");

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [],
    output: {
      chunkFilename: "[name].[contenthash].js",
      filename: "[name].[contenthash].js",
    },
    performance: {
      hints: false,
    },
    experiments: {
      topLevelAwait: true,
    },
  },
  filenameHashing: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Motivatoh";
      args[0].version = `${version}/${new Date().toISOString()}`;
      return args;
    });
  },

  devServer: {
    allowedHosts: "auto",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },
});
