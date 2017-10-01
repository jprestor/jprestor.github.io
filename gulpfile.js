var gulp = require('gulp')
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');

//сборка less
gulp.task('less', function() {
	gulp.src("less/style.less")
		.pipe(less())
		.pipe(gulp.dest("css"));
});

//Минификация css
//gulp.task('mincss', function(){
  //gulp.src('css/style.css')
    //.pipe(minifyCss())
		//.pipe(gulp.dest('css'));
//});

//Отслеживание
gulp.task('watcher',function(){
	  gulp.watch('less/**/*.less', ['less']);
    //gulp.watch('css/style.css', ['mincss']);
});