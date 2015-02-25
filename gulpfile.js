var gulp        = require("gulp");
var less        = require("gulp-less");
var bower       = require("main-bower-files");
var concat      = require("gulp-concat");

var lessPath    = "./less/**/*.less";

gulp.task("less", function() {

  gulp.src(lessPath)

    .pipe(less())

    .pipe(gulp.dest("./css"));

});

gulp.task("bower:assets:js", function() {
  gulp.src(bower({filter: "**/*.js"}))
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest("./vendor/js"));
});

gulp.task("watch", function() {
  gulp.watch(lessPath, ["less"]);
});
