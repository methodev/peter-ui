module.exports = {

  all:               ['<%= dist %>'],

  markup:            ['<%= prototype %>/*.html'],

  styles:            ['<%= dist %>/css'],

  scripts:           ['<%= dist %>/js'],

  fonts:             ['<%= dist %>/fonts'],

  images:            ['<%= dist %>/images'],

  model:             ['<%= dist %>/model'],

  patternlab_styles: ['<%= dist %>/styleguide/<%= pkg.name %>']

};