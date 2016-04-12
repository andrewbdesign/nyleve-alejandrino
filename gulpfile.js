var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');
    minify = require('gulp-minify-css'),
    webserver = require('gulp-webserver');

gulp.task('js', function () {
    gulp.src(['js/**/*.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('website/js/'))
        .pipe(notify({
            message: 'Finished minifying JavaScript'
        }));
});

gulp.task('html', function () {
    gulp.src('website/*.html')
});

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('website/css/'));
});

gulp.task('watch', function () {
    gulp.watch('js/**/*', ['js']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch(['website/*.html'], ['html']);
});

gulp.task('webserver', function () {
    gulp.src('website/')
        .pipe(webserver({
            livereload: true,
            open: true,
            localhost: 8000
        }));
});

gulp.task('default', ['watch', 'html', 'js', 'sass', 'webserver']);
