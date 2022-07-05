module.exports = function () {
  app.gulp.task('serve', function () {
    app.browserSync.init({
      server: 'build/'
    });

    app.gulp.watch('sass/**/*.scss', app.gulp.series('sass'));
    app.gulp.watch('*.html', app.gulp.series('html'));
    app.gulp.watch('js/**/*.js', app.gulp.series('scripts'));
    app.gulp.watch('img/**/*.{png,jpg,svg}', app.gulp.series('allimg'));
  });
};