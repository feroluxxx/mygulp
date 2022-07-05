module.exports = function () {
  app.gulp.task('images', function () {
    return app.gulp.src('build/img/**/*.{png,jpg,svg}')
      .pipe(app.gp.imagemin([
        app.gp.imagemin.jpegtran({progressive: true}),
        app.imageminJpegRecompress({
          loops: 5,
          min: 65,
          max: 70,
          quality: 'medium'
        }),
        app.gp.imagemin.optipng({optimizationLevel: 3}),
        app.imageminPngquant({quality: '65-70', speed: 5}),
        app.gp.imagemin.svgo()
      ]))
      .pipe(app.gulp.dest('build/img'));
  });
};