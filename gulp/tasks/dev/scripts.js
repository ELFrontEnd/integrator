// TASK - DEV - SCRIPTS

var gulp   = require('gulp');
var concat = require('gulp-concat');


/**
 * Deal with JS scripts
 */
gulp.task('scripts', function() {
  return gulp.src('./build/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});