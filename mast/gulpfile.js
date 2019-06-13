var gulp = require('gulp');
var sass = require('gulp-sass')
gulp.task('sass',function(){
    gulp.src('./test.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
});
gulp.watch('./test.scss',['sass'])