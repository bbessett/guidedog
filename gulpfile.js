'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('css/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});
 
gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('css/sass/**/*.scss', ['sass']);
});

