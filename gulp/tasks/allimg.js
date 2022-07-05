module.exports = () => {
  app.gulp.task("allimg", () => {
      return app.gulp.src("img/**/*.{jpg,png,svg}")
        .pipe(app.gulp.dest("build/img"))
    }
  )
}