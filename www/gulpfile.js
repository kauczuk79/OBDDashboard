var gulp = require('gulp');

gulp.task('default', [
    'compile',
    'concatenate',
    'minify'
]);

gulp.task('compile', [
    'compile:style'
]);

gulp.task('concatenate', [
    'concatenate:js',
    'concatenate:style'
])

gulp.task('minify', [
    'minify:js',
    'minify:style'
]);

gulp.task('compile:style', function () {
    console.log('Compile Styles');
});

gulp.task('concatenate:js', function () {
    console.log('Concatenate JavaScript');
});

gulp.task('concatenate:style', function () {
    console.log('Concatenate Styles');
});

gulp.task('minify:js', function () {
    console.log('Minify JavaScript');
});

gulp.task('minify:style', function () {
    console.log('Minify Styles');
});