var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    gulpSequence = require('gulp-sequence');

gulp.task('default', gulpSequence(
    'compile',
    'concatenate',
    'minify'
));

gulp.task('compile', gulpSequence([
    'compile:style'
]));

gulp.task('concatenate', gulpSequence([
    'concatenate:js',
    'concatenate:style'
]));

gulp.task('minify', gulpSequence([
    'minify:js',
    'minify:style'
]));

gulp.task('compile:style', function () {
    console.log('Compile Styles');
});

gulp.task('concatenate:js', function () {
    console.log('Concatenate JavaScript');
    gulp.src('./src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js'));
});

gulp.task('concatenate:style', function () {
    console.log('Concatenate Styles');
});

gulp.task('minify:js', function () {
    console.log('Minify JavaScript');
    //    TODO
    gulp.src('./temp/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
        .on('error', function (err) {
            console.error('Error in compress task', err.toString());
        });
});

gulp.task('minify:style', function () {
    console.log('Minify Styles');
});