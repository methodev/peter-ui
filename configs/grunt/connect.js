var rewriteModule = require('http-rewrite-middleware');

module.exports = {
  server: {
    options: {
      port: '<%= port %>',
      base: './<%= dist %>/',
      livereload: false
    }
  }
};