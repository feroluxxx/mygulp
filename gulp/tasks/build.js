module.exports = () => {
  app.gulp.task("build", app.gulp.series("clean", "copy", "sass", "scripts", "images", "webp", "svg"))
}