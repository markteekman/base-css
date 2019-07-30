// initialize gulp modules
const { src, dest, watch, series, parallel } = require("gulp");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");

// file path variables
const files = {
	scssPath: "src/scss/**/*.scss",
	jsPath: "src/js/**/*.js"
}

// compile scss into css task
function compileScss() {
    // 1. location of scss files
    return src(files.scssPath)
    // 2. pass scss files through sass compiler and log errors
    .pipe(sass().on("error", sass.logError))
	// 3. minify css and add vendor prefixes
	.pipe(postcss([ autoprefixer(), cssnano() ] ))
    // 4. save css to dist folder
    .pipe(dest("./dist/css"))
    // 5. stream changes to the browsers with browsersync
    .pipe(browserSync.stream());
}

// compile js files task
function compileJs() {
	// 1. location of js files
	return src(files.jsPath)
	// 2. concatinate multiple files into one
	.pipe(concat("app.js"))
	// 3. minify js files
	.pipe(uglify())
	// 4. save js to dist folder
	.pipe(dest("./dist/js"));
}

// watch for changes in scss, js and html files
function watcher() {
    browserSync.init({
        server: {
            baseDir: "./",
			open: false
        }
    });
	
    watch("./" + files.scssPath, compileScss);
	watch("./" + files.jsPath, compileJs);
    watch("./*.html").on("change", browserSync.reload);
    watch("./src/js/**/*.js").on("change", browserSync.reload);
}

// default 'gulp' task for terminal
exports.default = series(
	parallel(compileScss, compileJs),
	watcher
);
