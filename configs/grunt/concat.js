var grunt = require('grunt');

var Libs = function() {
      return [
        'node_modules/css-browser-selector/css_browser_selector.min.js'
      ];
    };

var libs = new Libs(),
    devLibs = new Libs();

devLibs.unshift('node_modules/jquery/dist/jquery.min.js');

module.exports = {
  options: {
    separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
    stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
  },

  dist: {
    src: devLibs,
    dest: '<%= dist %>/js/libs.js'
  }
};