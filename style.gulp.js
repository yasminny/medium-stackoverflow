const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const path = require('path')
const notifier = require('node-notifier')
const autoprefixer = require('gulp-autoprefixer')
const postcss = require('gulp-postcss')
const pkg = require('./package.json')
module.exports = () => {
	return () => {
		return gulp.src('views/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(cleanCSS())
			.pipe(postcss([ require('postcss-flexibility') ]))
			.pipe(autoprefixer({
				browsers: pkg.browserslist,
				cascade: false
			}))
			.pipe(gulp.dest('views'))
			.on('end', () => {
					notifier.notify({
						message: 'Styles build completed',
						title: 'style builder'
					})
				})
	}
}
