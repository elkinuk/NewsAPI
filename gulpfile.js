const gulp = require("gulp");
const useref = require('gulp-useref');
const image = require('gulp-image');
const babel = require('gulp-babel');
const runSequence = require('run-sequence');

gulp.task('html', () =>
  gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
);

gulp.task('image', () =>
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'))
);

gulp.task('scripts', () =>
  gulp.src(['node_modules/babel-polyfill/dist/polyfill.js','src/js/*.js'])
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(gulp.dest('src/js/compiled'))
);

gulp.task('default', callback => runSequence('scripts', ['image', 'html'], callback))