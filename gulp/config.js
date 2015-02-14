var path = require('path');

var dir = path.join(__dirname, '..');

module.exports = {
  metalsmith: {
    dir: dir,
    src: './src',
    dest: './build',
    stylus: {
      nib: true
    },
    markdown: {
      smartypants: true,
      tables: true,
      gfm: true,
      breaks: true
    },
    templates: {
      engine: 'jade',
      directory: './templates'
    }
  },
  watch: {
    src: dir + '/{src,templates}/**/*'
  },
  browserSync: {
    server: {
      baseDir: dir + '/build/'
    }
  }
};
