var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename');

// Configs
var autoprefixerConfig = {
	browsers: ['last 2 versions', 'Android >= 4.0'],
	cascade: true,
	remove: true
}

gulp.task('style', function(){
	return gulp.src('./breeze.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer(autoprefixerConfig))
	.pipe(gulp.dest('./'))
	.pipe(rename({ suffix: '.min'}))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
	gulp.watch('./breeze.scss', ['style']);
});
	
gulp.task('default', function(){
	gulp.start('style', 'watch');
});