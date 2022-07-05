const sass = require('gulp-sass')(require('sass'));

module.exports = () => {
  app.gulp.task("sass", () => {
      return app.gulp.src("sass/style.scss")
        .pipe(app.gp.plumber())
        .pipe(app.gp.sourcemaps.init())
        .pipe(sass())
        .pipe(app.gp.autoprefixer({
          overrideBrowserslist: ["last 2 versions"]
        }))
        .pipe(app.gp.csso())
        .pipe(app.gp.rename("style.min.css"))
        .pipe(app.gp.sourcemaps.write(""))
        .pipe(app.gulp.dest("build/css"))
        .pipe(app.browserSync.stream())
    }
  )
}