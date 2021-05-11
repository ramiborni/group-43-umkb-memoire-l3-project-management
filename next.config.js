const {i18n} = require('./next-i18next.config')
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');


module.exports = withCss({
  i18n,
  cssModules: true,
  ...withLess({
    lessLoaderOptions: {
      modifyVars: {
        '@base-color': '#9891c8'
      },
      javascriptEnabled: true,
    },
  })
})