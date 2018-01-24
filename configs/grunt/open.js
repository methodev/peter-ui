var browser = process.platform === 'win32' ? 'Chrome' : 'Google Chrome';

module.exports = {
  dist: {
    app: browser,
    path: 'http://localhost:<%= port %>'
  },

  prod: {
    app: browser,
    path: 'http://<%= pkg.name %>.martinmetodiev.com'
  },

  build: {
    app: browser,
    path: 'https://travis-ci.org/martinmethod/<%= pkg.name %>/builds'
  },

  repo: {
    app: browser,
    path: 'https://github.com/martinmethod/<%= pkg.name %>'
  }
};