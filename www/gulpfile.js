var gulp = require('gulp'),
    clean = require('gulp-clean'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    gulpSequence = require('gulp-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

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
    'concatenate:js',
    'concatenate:style'
]));

gulp.task('minify', gulpSequence([
    'minify:js',
    'minify:style'
]));

gulp.task('clean', function () {
    return gulp.src(['./js/app.*', './css/app.*'], {read:false})
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
    return gulp.src('./src/css/**/*.css')
        .pipe(concatCss('/app.css'))
        .pipe(gulp.dest('./css'));
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
    return gulp.src('./css/app.css')
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'));
});