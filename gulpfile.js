var gulp = require('gulp'),
    connect = require('gulp-connect'), // run server
    open = require('gulp-open'), // after sever will show new tab browser
    browserify = require('browserify'), // transpiler (npm install babelify แปลง JSX to JS และ ES2015 to ES5)
    source = require('vinyl-source-stream'), // Create New file after bundle from browserify
    historyApiFallback = require('connect-history-api-fallback'); // callback from Router of react-router

gulp.task('server', function() {
  connect.server({
    root: 'public',
    livereload: true,
    port: 8000,
    middleware: function(connect, opt){
        return [historyApiFallback()];
    }
  });
});

gulp.task('open', ['server'], function() {
  gulp.src('public/index.html')
    .pipe(open({uri: 'http://localhost:8000/'}));
});

gulp.task('js', function() {
  browserify('./src/main.js')
    .transform("babelify", {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./src/*.js', ['js']);
});

gulp.task('default', ['open', 'js', 'watch']);
