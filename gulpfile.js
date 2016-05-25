var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');

var files = 'src/*.js';

gulp.task('uglify', function() {
  return gulp.src(files)
    .pipe(plumber())
    .pipe(uglify({preserveComments: 'license'}))
    .on('error', notify.onError('Error: <%= error.message %>'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Error: <%= error.message %>'));
});

gulp.task('copy', function() {
  return gulp.src(files)
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['lint', 'uglify', 'copy']);

gulp.task('default', ['build'], function() {
  return gulp.watch(files, ['build']);
});
