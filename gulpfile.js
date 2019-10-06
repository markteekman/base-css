// initialize gulp..
const {
	src, dest, watch, series, parallel
} = require("gulp");


// ..and gulp plugins
const autoprefixer	= require("autoprefixer");
const browserSync	= require("browser-sync").create();
const cssnano		= require("cssnano");
const del			= require("del");
const babel			= require("gulp-babel");
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
const compileImg = () => {
	// 1. location of img files
	return src(files.imgPath)
	// 2. run files through imagemin plugin
	.pipe(cache(imagemin()))
	// 3. save img to dist folder
	.pipe(dest("./dist/img"));
}


// compile js files task
function compileJs() {
	// 1. location of js files, exclude all min.js files
	return src([files.jsPath, "!src/js/**/*.min.js"])
	// 2. compile es2016 to es2015 with babel
	.pipe(babel({
		presets: ['@babel/env'],
	}))
	// 3. concatinate multiple files into one
	.pipe(concat("app.js"))
	// 4. minify js files
	.pipe(uglify())
	// 5. save js to dist folder
	.pipe(dest("./dist/js"));
}


// compile scss into css, minify and prefix css and write sourcemaps task
const compileScss = () => {
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
const compileHtml = () => {
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
const cleanUp = (done) => {
	return del("./dist")
	done();
}


// copy font awesome js to src js libs
const faJs = () => {
	return src("node_modules/@fortawesome/fontawesome-free/js/all.min.js")
	.pipe(dest("src/js/libs"));
}


// watch for changes in scss, js and html files
const watcher = () => {
	browserSync.init({
		server: {
			baseDir: "./dist",
		}, open: false
	});

	watch("./" + files.jsPath, compileJs);
	watch("./" + files.imgPath, compileImg);
	watch("./" + files.scssPath, compileScss);
	watch("src/html/pages/*").on("change", series(compileHtml, browserSync.reload));
	watch("src/html/{layouts,partials}/**/*").on("change", series(async () => { await panini.refresh() }, compileHtml, browserSync.reload));

	watch("./src/js/**/*.js").on("change", browserSync.reload);
}


// gulp build task for distribution
exports.build = series(
	cleanUp,
	parallel(compileJs, compileImg, compileScss, compileHtml, faJs)
)


// default 'gulp' task for terminal
exports.default = series(
	cleanUp,
	parallel(compileJs, compileImg, compileScss, compileHtml, faJs),
	watcher
);
