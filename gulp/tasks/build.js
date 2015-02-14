var gulp = require('gulp');
var Metalsmith = require('metalsmith');
var sass = require('metalsmith-sass');
var stylus = require('metalsmith-stylus');
var jade = require('metalsmith-jade');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('../config');

gulp.task('build', function() {
  Metalsmith(config.metalsmith.dir)
    .source(config.metalsmith.src)
    .destination(config.metalsmith.dest)
    .clean(true)
    .use(sass())
    .use(stylus(config.metalsmith.stylus))
    .use(jade())
    .use(markdown(config.metalsmith.markdown))
    .use(templates(config.metalsmith.templates))
    .build(reload);
});
