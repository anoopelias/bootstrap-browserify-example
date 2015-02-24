
var gulp = require('gulp');
var atomify = require('atomify');

gulp.task('default', function () {
  atomify.css('less/main.less', 'dist/bundle.css');
  atomify.js('js/index.js', 'dist/bundle.js');
});
