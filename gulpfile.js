var path = require('path');
var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

var sourceRoot = [__dirname, 'build-ts'].join(path.sep);
var sources = [['build-ts', '**', '*.js'].join(path.sep), 'src/underscore-fix.js'];

gulp.task('default', function () {
    gulp.start('build');

    gulp.src(sources)
        .pipe(watch(sources))
        .pipe(sourcemaps.init())
        .pipe(babel({stage: 0}))
        .pipe(sourcemaps.write({sourceRoot: sourceRoot}))
        .pipe(gulp.dest('build'));
});

gulp.task('build', function () {
    gulp.src(sources)
        .pipe(sourcemaps.init())
        .pipe(babel({stage: 0}))
        .pipe(sourcemaps.write({sourceRoot: sourceRoot}))
        .pipe(gulp.dest('build'));
});