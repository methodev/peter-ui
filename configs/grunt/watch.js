
module.exports = {
  options: {
    livereload: false,
    event: ['changed', 'added', 'deleted']
  },

  styles: {
    files: ['src/styles/**/*.scss', 'src/data-uri/**/*.*'],
    tasks: ['sasslint:app', 'clean:styles', 'stripCssComments', 'sass:app']
  },

  scripts: {
    files: ['src/scripts/**/*.*'],
    tasks: ['clean:scripts', 'concat', 'uglify']
  },

  model: {
    files: ['src/model/**/*.json'],
    tasks: ['clean:model', 'copy:model']
  },

  fonts: {
    files: ['src/fonts/**/*.*'],
    tasks: ['clean:fonts', 'copy:fonts']
  },

  images: {
    files: ['src/images/**/*.*'],
    tasks: ['clean:images', 'copy:images']
  },

  patternlab: {
    files: ['src/patternlab/**/*.*', '!src/patternlab/styles/**/*.scss'],
    tasks: ['patternlab']
  },

  patternlab_styles: {
    files: ['src/patternlab/styles/**/*.scss'],
    tasks: ['sasslint:patternlab', 'clean:patternlab_styles', 'sass:patternlab']
  }
};