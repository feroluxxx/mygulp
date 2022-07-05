module.exports = () => {
  app.gulp.task("scripts", () => {
      return app.gulp.src(app.path.js)
        .pipe(app.gp.plumber())
        .pipe(app.gp.sourcemaps.init())
        .pipe(app.gp.babel({
          presets: ["@babel/preset-env"]
        }))
        .pipe(app.gp.concat("all.js"))
        .pipe(app.gp.uglify())
        .pipe(app.gp.rename("all.min.js"))
        .pipe(app.gp.sourcemaps.write(""))
        .pipe(app.gulp.dest("build/js"))
        .pipe(app.browserSync.stream())
    }
  )
}