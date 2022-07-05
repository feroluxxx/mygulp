module.exports = function () {
  app.gulp.task('webp', function () {
    return app.gulp.src('build/img/**/*.{png,jpg}')
      .pipe(app.gp.webp({quality: 90}))
      .pipe(app.gulp.dest('build/img'));
  });
};