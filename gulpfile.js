'use strict'
const gulp = require('gulp')
const styleTasks = require('./style.gulp')

gulp.task('styles:build', styleTasks())
gulp.task('styles:watch', (done) => {
	gulp.watch('./views/**/*.scss', gulp.series(['styles:build']))
})

gulp.task('default', gulp.series(['styles:build', 'styles:watch']))
