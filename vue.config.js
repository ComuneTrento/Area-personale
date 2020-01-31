module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/',
  assetsDir: 'assets/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "assets/css/fonts.css.scss";
        `
      }
    }
  }
};
