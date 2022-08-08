const gulp = require("gulp");
const { TailwindRegistry, CleanRegistry } = require("@jswork/gulp-registry");
const reg1 = new TailwindRegistry({
  src: "./styles/index.scss",
  dest: "./public/",
});
const reg2 = new CleanRegistry({ dest: "./public/" });

[reg1, reg2].forEach((reg) => gulp.registry(reg));

gulp.task("tailwind:watch", () => {
  gulp.watch(["./styles/**/*.scss", "index.html"], gulp.series("tailwind"));
});
