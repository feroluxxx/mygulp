module.exports = function () {
  app.gulp.task('svg', function () {
    return app.gulp.src('img/**/*.svg')
      .pipe(app.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(app.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe(app.gp.replace('&gt;', '>'))
      // build svg sprite
      .pipe(app.gp.svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      }))
      .pipe(app.gulp.dest('build/img'));
  });
}