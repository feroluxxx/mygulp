module.exports = () => {
  app.gulp.task("copy", () => {
      return app.gulp.src([
        "fonts/**/*.{woff,woff2}",
        "img/**",
        "*.html"
      ], {
        base: "."
      })
        .pipe(app.gulp.dest("build"))
    }
  )
}