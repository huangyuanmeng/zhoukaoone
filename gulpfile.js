var gulp = require('gulp');
var minjs = require('gulp-uglify');//js
var mincss = require('gulp-clean-css');//css
var minhtml = require('gulp-htmlmin');//html
//压缩css
gulp.task('css',function(){
    gulp.src('./content/css/style.css')
        .pipe(mincss())
        .pipe(gulp.dest('newcss'));
})
//压缩js
gulp.task('js',function(){
    gulp.src('./js/angular.min.js')
        .pipe(minjs())
        .pipe(gulp.dest('newjs'))
})
//压缩html
var options = {
    collapseWhitespace:true
}
gulp.task('html',function(){
    gulp.src('./index.html')
        .pipe(minhtml(options))
        .pipe(gulp.dest('newhtml'))
})
gulp.task('default',['css','js','html'])