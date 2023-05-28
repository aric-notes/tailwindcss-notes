const gulp = require("gulp");
const { TailwindRegistry, CleanRegistry } = require("@jswork/gulp-registry");
const reg1 = new TailwindRegistry({
  src: "./styles/index.scss",
  dst: "./public/",
});
const reg2 = new CleanRegistry({ dest: "./public/" });

[reg1, reg2].forEach((reg) => gulp.registry(reg));

gulp.task("dev:tailwind", () => {
  gulp.watch(["./styles/**/*.scss"], gulp.series("tailwind"));
});

gulp.task("build:tailwind", gulp.series("clean", "tailwind"));
