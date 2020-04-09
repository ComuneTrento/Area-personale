module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
          ? '/area-personale/'
          : '/area-personale/',

  pluginOptions: {
    i18n: {
      locale: 'it',
      fallbackLocale: 'it',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
