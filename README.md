# BaseCSS

Personal project template I use to kickoff new projects and get to working on new ideas faster instead of having to set up a lot of stuff over and over again. I use a couple of Gulp tools to get up and running and developing a new project in no time, running SCSS, JS and HTML from the /src/ folder to a directly distributable /dist/ folder.

* [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to add vendor prefixes to dist CSS
* browserSync to watch for changes and refresh on save SCSS, JS and HTML
* cssnano to minify css
* del to delete and rebuild dist folder when running gulp command
* cache to help with caching images
* concat for concatinating JS
* imagemin for optimizing images
* postcss for ???
* sass for compiling scss files
* sourcemaps for debugging SCSS, JS and HTML in the browser
* Uglify for minifying javascript
* panini from ZURB for templating your HTML files (based on Handlebars)

## How to use

Simply hit "Use this template" at the top of this page. Then setup the project on your local folder and run **gulp** for building the project and watching for changes or just **gulp build** for a one time build.

### File structure

SCSS structure is based on a base, bricks, blocks, sections, template fylosophie. 

## Inspired by

Many awesome people on the web, including ZURB Foundation, Solved by Flexbox, Zell, CSS Tricks and many more awesome resources available on the web.

## License

MIT. Feel free to do as you please!

## Improvements roadmap

- [x] Setup default project
- [x] Setup gulp plugin tasks
- [ ] Source map html, css and js
- [ ] Make blocks WCAG AA accessible
- [x] Implement Flexbox based grid
- [ ] Implement CSS Grid based grid (optional)
