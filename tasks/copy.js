const gulp = require("gulp");

// module.exports = function copy(done) {
//   gulp.src([
//     "source/fonts/*.{woff2,woff}",
//     "source/*.ico",
//   ], {
//     base: "source"
//   })
//   .pipe(gulp.dest("build"));
//   done();
// }

module.exports = function copy(done) {
  gulp
    .src(["source/frontend/build/**/*", "!source/frontend/build/*.html", "!source/frontend/build/css/**/*"], {
      base: "source/frontend/build",
    })
    .pipe(gulp.dest("build"));
  done();
};
