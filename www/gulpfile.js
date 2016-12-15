var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    gulpSequence = require('gulp-sequence'),
    rename = require('gulp-rename');

gulp.task('default', gulpSequence(
    'clean',
    'compile',
    'concatenate',
    'minify'
));

gulp.task('compile', gulpSequence([
    'compile:style'
]));

gulp.task('concatenate', gulpSequence([
    'concatenate:js'
]));

gulp.task('minify', gulpSequence([
    'minify:js'
]));

gulp.task('clean', function () {
    return gulp.src(['./js/app.*'], {read:false})
        .pipe(clean());
});

gulp.task('compile:style', function () {
    console.log('Compile Styles');
});

gulp.task('concatenate:js', function () {
    console.log('Concatenate JavaScript');
    return gulp.src('./src/js/**/*.js')
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
    return gulp.src(['./js/app.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./js'));
});

gulp.task('minify:style', function () {
    console.log('Minify Styles');
});