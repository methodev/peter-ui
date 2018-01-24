var config = require('../../src/patternlab/config.json'),
    path = require('path');

function paths() {
  return config.paths;
}

module.exports = {

  // Model
  model: {
    files: [{
      expand: true,
      cwd: 'src/model',
      src: ['**'],
      dest: '<%= dist %>/model/'
    }]
  },

  // Fonts
  fonts: {
    files: [{
      expand: true,
      cwd: 'src/fonts',
      src: ['**'],
      dest: '<%= dist %>/fonts/'
    }]
  },

  // Images
  images: {
    files: [{
      expand: true,
      cwd: 'src/images',
      src: ['**'],
      dest: '<%= dist %>/images/'
    }]
  },

  // Patternlab styleguide
  patternlab_styleguide: {
    files: [{
      expand: true,
      cwd: path.resolve(paths().source.styleguide),
      src: ['*', '**'],
      dest: path.resolve(paths().public.root)
    }]
  }

};