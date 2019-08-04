// initialize gulp modules
const { src, dest, watch, series, parallel } = require("gulp");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const panini = require("panini");


// file path variables
const files = {
	jsPath: "src/js/**/*.js",
	scssPath: "src/scss/**/*.scss",
	htmlPath: "src/html/pages/**/*.html"
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


// compile scss into css, minify and prefix css and write sourcemaps task
function compileScss() {
    // 1. location of scss files
    return src(files.scssPath)
	// 2. init sourcemaps
	.pipe(sourcemaps.init())
    // 3. pass scss files through sass compiler and log errors
    .pipe(sass().on("error", sass.logError))
	// 3. minify css and add vendor prefixes
	.pipe(postcss([ autoprefixer(), cssnano() ] ))
	// 4. write to sourcemaps
	.pipe(sourcemaps.write())
    // 5. save css to dist folder
    .pipe(dest("./dist/css"))
    // 6. stream changes to the browsers with browsersync
    .pipe(browserSync.stream());
}


// panini flatten html, hdb and handlebars files to dist
function compileHtml() {
	// 1. location of html files
	return src(files.htmlPath)
	// 2. flatten all html files
	.pipe(panini({
		root: "src/html/pages/",
		layouts: "src/html/layouts/",
		partials: "src/html/partials/",
		helpers: "src/html/helpers/",
		data: "src/html/data/"
	}))
	// 3. save flattend files to dist folder
	.pipe(dest("./dist"));
}


// watch for changes in scss, js and html files
function watcher() {
    browserSync.init({
        server: {
            baseDir: "./dist",
        }, open: false
    });

	watch("./" + files.jsPath, compileJs);
    watch("./" + files.scssPath, compileScss);
	watch("./dist/*.html").on("change", browserSync.reload);
    watch("./src/js/**/*.js").on("change", browserSync.reload);
	watch("./src/html/{pages,layouts,partials,helpers,data}/*.html", compileHtml);
}


// copy latest font awesome js to src js libs
function faJs() {
	return src("node_modules/@fortawesome/fontawesome-free/js/all.min.js")
	.pipe(dest("src/js/libs"));
}


// default 'gulp' task for terminal
exports.default = series(
	parallel(compileScss, compileJs, compileHtml),
	watcher
);
