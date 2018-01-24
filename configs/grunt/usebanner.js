module.exports = {
  styles: {
    options: {
      banner: '<%= banner %>'
    },
    files: {
      src: ['<%= dist %>/css/**/*.css']
    }
  },

  scripts: {
    options: {
      banner: '<%= banner %>'
    },
    files: {
      src: ['<%= dist %>/js/**/*.js']
    }
  }
};