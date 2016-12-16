var gulp = require('gulp'),
    clean = require('gulp-clean'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    gulpSequence = require('gulp-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

gulp.task('default', gulpSequence(
    'clean:pre',
    'compile',
    'concatenate',
    'minify',
    'clean:post'
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

gulp.task('clean:pre', function () {
    return gulp.src(['./js/app.*', './css/app.*'], {read:false})
        .pipe(clean());
});

gulp.task('clean:post', function () {
    return gulp.src(['./src/temp'], {read: false})
        .pipe(clean());
});

gulp.task('compile:style', function () {
    console.log('Compile Styles');
    return gulp.src(['./src/**/*.scss'])
        .pipe(sass.sync().on('error', function (err) {
            console.log(err);
        }))
        .pipe(gulp.dest('./src/temp'));
});

gulp.task('concatenate:js', function () {
    console.log('Concatenate JavaScript');
    return gulp.src('./src/**/*.js')
        //.pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./js'));
});

gulp.task('concatenate:style', function () {
    console.log('Concatenate Styles');
    return gulp.src('./src/temp/**/*.css')
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