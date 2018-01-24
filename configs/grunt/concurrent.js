var grunt = require('grunt'),
    prod = grunt.option('target') === 'prod',

    styleTasks = prod ?
      ['stripCssComments', 'sass', 'usebanner:styles'] :
      ['stripCssComments', 'sass'],

    scriptTasks = prod ?
      ['concat', 'uglify', 'usebanner:scripts'] :
      ['concat', 'uglify'];

module.exports = {

  build: [
    // styles
    styleTasks,

    // scripts
    scriptTasks,

    // model
    ['copy:model'],

    // images
    ['copy:images'],

    // fonts
    ['copy:fonts'],

    // patternlab
    ['patternlab']
  ],

  review: [
    'open:build',
    'open:repo',
    'open:prod'
  ]

};