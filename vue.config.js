module.exports = {
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
