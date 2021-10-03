// const withSass = require('@zeit/next-sass');
// const withCss = require('@zeit/next-css');

// module.exports = withCss(withSass());

const path = require('path')

module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    }
  }