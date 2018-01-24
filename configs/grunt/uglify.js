var grunt = require('grunt');

module.exports = {
  options: {
    preserveComments: false,
    sourceMap: false,
    compress: {
      drop_debugger: true,
      drop_console: true
    }
  },

  dist: {
    src:  '<%= dist %>/js/libs.js',
    dest: '<%= dist %>/js/libs.js'
  }
};