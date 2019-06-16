const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css
function compile() {
    // 1. where are my scss files
    return gulp.src("./src/scss/**/*.scss")
    // 2. pass those files through sass compiler
    .pipe(sass().on("error", sass.logError))
    // 3. where do I save the compiled CSS?
    .pipe(gulp.dest("./dist/css"))
    // 4. stream changes to the browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./src/scss/**/*.scss", compile);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.compile = compile;
exports.watch = watch;
