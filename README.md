# BaseCSS

A personal front-end template that uses Gulp and SCSS to get you working on new ideas faster instead of having to set up a lot of stuff over and over again. The template uses a couple of Gulp plugins to get you up and running and creating a new project in no time. The template also contains a SCSS structure with the basics of every project (colors, fonts, grid, breakpoints, shadows, spacing, sizing, borders and icons) and essentially providing you with the needs to set up a front-end **Design System**. BaseCSS runs your SCSS, JavaScript, Images and HTML from the `/src` folder to a directly distributable `/dist` folder. For a breakdown of all the included Gulp plugins used for this template check the bottom of the page.

## How to use

Simply hit the "Use this template" button at the top of this page and set it up on your local machine. Inside your local folder run `gulp` on the command line for building the project for the first time and to automatically watch for changes made in your SCSS, JavaScript or HTML. You can also use `gulp build` for a one time build of the project. To use the free Font Awesome 5 Solid Icons library that's included in BaseCSS you can use something like `<i class="fas fa-home"></i>` in your HTML. The Font Awesome JavaScript will convert this code into an accessible SVG which you can easily manipulate in your SCSS files with your own classes or a global `.svg-inline--fa` class. To see all the icons you can use, checkout the [Font Awesome Icon Gallery](https://fontawesome.com/icons?d=gallery).

### File structure

Your `/src` folder is where you'll be doing your thing. As long as you have gulp running or run the gulp build command, your `/dist` folder would be the one you drop on a server (that is, if your not building some kind of CMS behind it). The `/src` folder consists of four mayor sub folders:

#### - `/src/html`

BaseCSS uses ZURB Foundation's Panini as your HTML templating engine (which in turn uses [Handlebars.js](https://handlebarsjs.com/)). Great for re-usability of HTML code and for your workflow efficiency! This is what your `/html` folder structure looks like and how you use it:

* `/html/data` to store your .json data files which you can use inside your layouts, pages and partials
* `/html/helpers` to write and store your own handlebars helpers
* `/html/layouts` to store your layouts, always requires a `default.html`
* `/html/pages` to store all your different pages (such as `index.html`, `about.html`, `contact.html` etc.)
* `/html/partials` to store all your different partials (such as `header.html`, `navigation.html`, `footer.html` etc.)

For a more indepth look on how to use Panini, check out the the [Foundation docs](https://foundation.zurb.com/sites/docs/panini.html) here. I've set up a `default.html` to get you started and an `index.html` with an example of the Flexbox based grid.

#### - `/src/img`

Your image folder simply contains your media assets. The Gulp plugin **gulp-imagmin** optimizes this folder for you and generates the optimized images to the dist folder.

#### - `/src/js`

This folder contains all your JavaScript. You can structure it how you like, the Gulp plugin **gulp-concat** will concatenate all the .js files in the js and all it's sub folders.

#### - `/src/scss`

The scss folder of this templates contains a couple of presets set in `/scss/base` to get you going quick. Setting up a new project? Just 'tweak' these settings. I'll break it down a little so you know where to go:

* `/scss/base`
  * This folder contains all your base styles. See it as the foundation  of everything you make. It contains your color variables, box shadows, borders, fonts, sizing and spacing system, grid and mobile breakpoints.
    * `/_base-border.scss`
    * `/_base-breakpoint.scss`
    * `/_base-color.scss`
    * `/_base-elevation.scss`
    * `/_base-font.scss`
    * `/_base-grid.scss`
    * `/_base-icon.scss`
    * `/_base-outline.scss`
    * `/_base-print.scss`
    * `/_base-reset.scss`
    * `/_base-size.scss`
    * `/_base-space.scss`
* `/scss/bricks`
 	* Bricks are the smallest components of your system like lists, buttons, form elements, labels etc. Use what you define in base to build your bricks.
* `/scss/blocks`
 	* Blocks are a collection of your bricks, things like navigation menu's, dropdown's, call to actions, widgets, cards etc. go here. Use what you define in base to build your blocks.
* `/scss/sections`
  * Sections contain a collection of blocks and bricks. The easiest examples would be the header and footer of your website.
* `/scss/templates`
  * Templates are your page specific styles, for example home, about, shop or contact.
* `/scss/app.scss`
  * This files imports all your scss partials.

## Workflow example

This is just an example of how you could use the template. You are, of course, completely free to go about it as you please!

1. Download the template
2. Setup your color scheme in `/scss/base/_base-color`
3. Define a spacing system in `/scss/base/_base-space` (or just use the default)
4. Define a sizing system in `/scss/base/_base-size` (or just use the default)
5. If needed change your breakpoints in `/scss/base/_base-breakpoint.scss` and the grid width in `/scss/base/_base-grid.scss`
6. Run `gulp` in your command line
7. Structure your project partials in `/html/partials`, `/scss/brick` and `/scss/block`
8. Build up your pages, sections and templates in `/html/pages`, `/scss/sections` and `/scss/templates`
9. Write your nessecary JavaScript in `/src/js`
10. Deploy your compiled website from the `/dist` folder to your webserver

## Gulp plugins

* [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free) to use Font Awesome 5 solid icons
* [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to automatically add vendor prefixes to the CSS
* [browserSync](https://www.npmjs.com/package/browser-sync) to watch for changes and refresh the browser on save for JavaScript and HTML and to live inject SCSS changes
* [cssnano](https://www.npmjs.com/package/cssnano) for minifying the CSS
* [del](https://www.npmjs.com/package/del) to delete and rebuild the `/dist` folder when running the `gulp` or `gulp build` command
* [gulp-cache](https://www.npmjs.com/package/gulp-cache) to cache the images
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) for concatinating all JavaScript into one
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) for automatically optimizing images
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) to use autoprefixer and cssnano
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) for compiling the SCSS files
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) for debugging SCSS, JS and HTML in the browser
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) for minifying the concatinated JavaScript file
* [panini](https://www.npmjs.com/package/panini) for templating your HTML in reusable partials

## Inspired by

Many awesome people and organizations on the web, including ZURB Foundation, Solved by Flexbox, Zell, CSS Tricks and many more.

## Feedback

If you've got any ideas on how to improve this template then let me know! I'm always looking on how to improve and standardize my work so I can focus on what matters: creating new things :)

## License

MIT. Feel free to do as you please!
