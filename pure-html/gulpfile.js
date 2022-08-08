const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-dart-sass');

function processTailwind() {
  return (
    gulp
      .src('./styles/index.scss')
      .pipe(sass())
      .pipe(postcss())
      .pipe(gulp.dest('./public/'))
  );
}

gulp.task('tailwind', processTailwind);
