module.exports = () => {
  app.gulp.task("clean", () => {
      return app.del("build")
    }
  )
}