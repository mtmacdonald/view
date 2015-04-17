var gulp = require('gulp');
var concat = require('gulp-concat');

//for processing JavaScript
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream'); 
var uglify = require('gulp-uglify');

//config
var config = {
    'build_directory' : './release'
};

gulp.task('default', ['js']);

gulp.task('js', function() {
	//for correct way to use browserify in gulp see https://www.npmjs.org/package/vinyl-source-stream
	browserify('./src/main.js')
		.bundle()
		.pipe(source('./src/main.js'))
		.pipe(streamify(uglify()))
		.pipe(streamify(concat('draw.min.js')))
		.pipe(gulp.dest('./'));
});

