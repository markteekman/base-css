// initialize gulp..
const {
	src, dest, watch, series, parallel
} = require("gulp");


// ..and gulp plugins
const autoprefixer	= require("autoprefixer");
const browserSync	= require("browser-sync").create();
const cssnano		= require("cssnano");
const del			= require("del");
const cache			= require("gulp-cache");
const concat		= require("gulp-concat");
const imagemin		= require("gulp-imagemin");
const postcss		= require("gulp-postcss");
const sass			= require("gulp-sass");
const sourcemaps	= require("gulp-sourcemaps");
const uglify		= require("gulp-uglify");
const panini		= require("panini");


// file path variables
const files = {
	imgPath: "src/img/*",
	jsPath: "src/js/**/*.js",
	scssPath: "src/scss/**/*.scss",
	htmlPath: "src/html/pages/**/*.html"
}


// optimize images in src folder
function compileImg() {
	// 1. location of img files
	return src(files.imgPath)
	// 2. run files through imagemin plugin
	.pipe(cache(imagemin()))
	// 3. save img to dist folder
	.pipe(dest("./dist/img"));
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
    .pipe(sass({
		// 4. include different resets via scss resets
		includePaths: require("scss-resets").includePaths
	}).on("error", sass.logError))
	// 5. minify css and add vendor prefixes
	.pipe(postcss([ autoprefixer(), cssnano() ] ))
	// 6. write to sourcemaps
	.pipe(sourcemaps.write())
    // 7. save css to dist folder
    .pipe(dest("./dist/css"))
    // 8. stream changes to the browsers with browsersync
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
exports.compileHtml = compileHtml;


// cleanup dist folder when running new build
function cleanUp(done) {
	return del("./dist")
	done();
}


// watch for changes in scss, js and html files
function watcher() {
    browserSync.init({
        server: {
            baseDir: "./dist",
        }, open: false
    });

	watch("./" + files.jsPath, compileJs);
	watch("./" + files.imgPath, compileImg);
    watch("./" + files.scssPath, compileScss);
	
	// watch("./src/{pages,layouts,partials,helpers,data}/*.html", compileHtml);
	// watch("./dist/*.html").on("change", browserSync.reload);
	
	watch("src/html/pages/*").on("change", series(compileHtml, browserSync.reload));
	watch("src/html/{layouts,includes,helpers,data}/*").on("change", series(async () => { await panini.refresh() }, compileHtml, browserSync.reload));
	
    watch("./src/js/**/*.js").on("change", browserSync.reload);
}


// gulp build task for distribution
exports.build = series(
	cleanUp,
	parallel(compileJs, compileImg, compileScss, compileHtml)
)


// default 'gulp' task for terminal
exports.default = series(
	cleanUp,
	parallel(compileJs, compileImg, compileScss, compileHtml),
	watcher
);
