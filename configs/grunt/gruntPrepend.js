module.exports = {
  prepend : {
    options: {
      content: '@charset "UTF-8";'
    },
    files: [{
      src: 'app/css/*.css'
    }]
  }
};