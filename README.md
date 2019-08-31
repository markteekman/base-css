# BaseCSS

Personal HTML/CSS/JS project template I use to kickoff new projects and get to working on new ideas faster instead of having to set up a lot of stuff over and over again. I use a couple of Gulp tools to get up and running and developing a new project in no time, running SCSS, JS and HTML from the /src/ folder to a directly distributable /dist/ folder.

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

Your 'src' folder is where you'll be doin your thing. As long as you have gulp running or run the gulp build command, your 'dist' folder would be the one you drop on your server (that is, if your not building some kind of CMS on top of it). You can break the 'src' folder up in four sections:

### HTML

Based on ZURB Foundation's Panini your HTML folder consists of a couple of folders to structure your HTML pages, layouts, partials and data. Panini uses Handlebars.js to do the trick and comes with some nice Handlebars helpers. You can even make your own. More info on how to use Panini in the [Foundation docs] (https://foundation.zurb.com/sites/docs/panini.html). I've set up a default.html to get you started and an index.html with the example Flexbox based grid.

### Images

Your image folder simply contains your media assets. The Gulp tool imagmin optimizes this folder for you and generates the optimized images to the dist folder.

### Javascript

This contains all your JavaScript. You can structure it how you like, the concat Gulp plugin will concatinate all the .js files in the js and all it's sub folders.

### SCSS

This folder contains all of your SCSS files. It contains a structure of base, bricks, blocks, sections, templates and finally your app.scss to import all your different SCSS partials. In this project, base contains a lot of preset styles to get you going fast. It contains a spacing and sizing system, a responsive breakpoint mixin, a Flexbox bases grid, a color system, css reset, some base font styles and more. Tweak this how you like it to be! The other folders (bricks, blocks, sections, templates) can be used to setup all your other components. See bricks as your smallest components, like ul's, buttons, forms etc. Blocks would be a collection of your bricks, such as navigation menu's, dropdown's, call to actions, cards etc. Sections are, you geussed it, a collection of your blocks, such as a footer and a header. Finally, templates are styles based purely on a specific page such as home, about or contact for example.

## Feedback

If you've got any ideas on how to make this boilerplate better let me know! I'm always looking on how to improve and standardize my work so I can focus on what matters: creating new things :)

## Inspired by

Many awesome people on the web, including ZURB Foundation, Solved by Flexbox, Zell, CSS Tricks and many more awesome resources available on the web.

## License

MIT. Feel free to do as you please!
