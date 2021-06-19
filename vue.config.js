const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0', // host
    port: '8091', 
    open: false, 
    proxy: {
      '/api': {
        target: 'http://xxx.com',
        // ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '',
        // },
      },
    },
    overlay: {
      warning: true,
      errors: true,
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src')); // alias
    config.output.filename('[name].[hash].js')
      .end(); // hash
  },
}
