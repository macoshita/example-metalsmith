var gulp = require('gulp');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var browserSync = require('browser-sync');
var reload = require('browser-sync').reload;
var del = require('del');

var paths = {
  src: 'src/**/*'
}; 

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('build', ['clean'], function(cb) {
  Metalsmith(__dirname)
    .use(markdown())
    .use(templates('handlebars'))
    .build(cb);
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['build', reload]);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './build/'
    }
  });
});

gulp.task('default', ['watch', 'build', 'browser-sync']);
