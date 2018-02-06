module.exports = function(grunt) {

  //--------------------------| Variables

  var path = require('path'),
      pkg = grunt.file.readJSON('package.json'),
      env = grunt.option('target') || 'dev',
      banner = grunt.file.read('configs/banner.txt');


  //--------------------------| Project data

  grunt.project = {
    pkg: pkg,
    env: env,
    port: 6001,
    dist: 'dist',
    banner: banner
  };


  //--------------------------| Time grunt

  require('time-grunt')(grunt);


  //--------------------------| Config

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'configs/grunt'),
    data: grunt.project
  });


  //--------------------------| Build

  grunt.registerTask('build', function() {
    grunt.log.writeln(('Building a ' + env + ' version.').green);

    grunt.task.run(['clean:all', 'concurrent:build']);

    // if (env === 'prod') {
    //   grunt.task.run(['concurrent:prod']);
    // }
  });


  //--------------------------| Patternlab

    //read all paths from our namespaced config file
  var config = require('./src/patternlab/config.json'),
      pl = require('patternlab-node')(config);

  function getConfiguredCleanOption() {
    return config.cleanPublic;
  }

  grunt.registerTask('patternlab', 'create design systems with atomic design', function (arg) {
    grunt.task.run([
      'copy:patternlab_styleguide',
      'sass:patternlab'
    ]);

    if (arguments.length === 0) {
      pl.build(function(){}, getConfiguredCleanOption());
    }

    if (arg && arg === 'version') {
      pl.version();
    }

    if (arg && arg === "patternsonly") {
      pl.patternsonly(function(){},getConfiguredCleanOption());
    }

    if (arg && arg === "help") {
      pl.help();
    }

    if (arg && arg === "liststarterkits") {
      pl.liststarterkits();
    }

    if (arg && arg === "loadstarterkit") {
      pl.loadstarterkit(argv.kit, argv.clean);
    }

    if (arg && (arg !== "version" && arg !== "patternsonly" && arg !== "help" && arg !== "liststarterkits" && arg !== "loadstarterkit")) {
      pl.help();
    }
  });


}; // exports
