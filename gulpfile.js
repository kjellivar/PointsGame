var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
    sass: ['./scss/ionic.app.scss', './src/**/*.scss'],
    js:   ['./src/app.js', './src/**/*.js'],
    dist: './www/dist/'
};

gulp.task('default', ['sass', 'scripts']);

gulp.task('sass', function(done) {
    gulp.src(paths.sass)
        .pipe(concat('app.scss'))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest(paths.dist))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(paths.dist))
        .on('end', done);
});

gulp.task('scripts', function (done) {
    gulp.src(paths.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.dist))
        .pipe(rename({ suffix: '.min' }))
        //.pipe(stripDebug())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['scripts']);
});