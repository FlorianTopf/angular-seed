var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell'),
    ts = require('gulp-typescript'),
    tsd = require('gulp-tsd'),
    webserver = require('gulp-webserver');

// run init tasks
gulp.task('default', ['dependencies', 'ts', 'html', 'css']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.ts', ['ts']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
});

// install type definitions
gulp.task('tsd', function (callback) {
    tsd({
      "command": "reinstall",
      "latest": true,
      "config": "tsd.json"
    }, callback);
  }
);

// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
      'node_modules/systemjs/dist/system.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/build/angular-ui-router.js'
    ])
    .pipe(gulp.dest('build/lib'));
});

// compile & move js
gulp.task('ts', function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = gulp.src([
      'typings/tsd.d.ts',
      'src/**/*.ts'
    ])
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('build'));
});

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});
