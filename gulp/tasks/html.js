module.exports = () => {
  app.gulp.task("html", () => {
      return app.gulp.src("*.html")
        .pipe(app.gulp.dest("build"))
        .on("end", app.browserSync.reload)
    }
  )
}