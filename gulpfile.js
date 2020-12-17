const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const replace = require('gulp-replace');
const header = require('gulp-header');
const rename = require('gulp-rename');

gulp.task('sass', () => 
	gulp.src('scss/**/*.scss')
		.pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({cascade:false, grid:true}))
		.pipe(replace(/@charset "UTF-8";/g, ''))
        .pipe(header('@charset "UTF-8";'))
        .pipe(rename('Style.txt'))
		.pipe(gulp.dest('templates/'))
);

gulp.task('watch', () => 
	gulp.watch('scss/**/*.scss', gulp.task('sass'))
);

gulp.task('default', gulp.task('watch'));