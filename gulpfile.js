var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

//style paths
var sassFiles = 'scss/style.scss',
    cssDest = './';

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch',function() {
    gulp.watch(sassFiles,['styles']);
});

gulp.task('webserver', ['watch'],function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true
    }));
});