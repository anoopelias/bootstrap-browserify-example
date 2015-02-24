
var gulp = require('gulp');
var atomifyCss = require('atomify-css');
var atomifyJs = require('atomify-js'); 
gulp.task('default', function () {
  atomifyCss('less/main.less', 'dist/bundle.css');
  atomifyJs('js/index.js', 'dist/bundle.js');
});



