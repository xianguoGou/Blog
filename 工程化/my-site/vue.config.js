
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://my-sit.api.com",
      },
    },
  },
  configureWebpack: require('./webpack.config.js')
};
