# BaseCSS

A personal HTML/CSS/JS project template I use to kick off new projects and get to working on new ideas faster instead of having to set up a lot of stuff over and over again. The templates uses a couple of Gulp plugins to get you up and running and creating a new project in no time. The templates runs your SCSS, JavaScript and HTML from the `/src` folder to a directly distributable `/dist` folder. For a breakdown of all the included Gulp plugins check the bottom of the page.

## How to use

Simply hit "Use this template" at the top of this page and set it up on your local machine. Inside your local folder run `gulp` on the command line for building the project and watching for changes or just `gulp build` for a one time build. To use the free Font Awesome 5 Solid library, just use `<i class="fas fa-home"></i>` for example. The Font Awesome JavaScript will convert it to an accessible SVG. To see all icons you can use, checkout the [Font Awesome Icon Gallery](https://fontawesome.com/icons?d=gallery).	

### File structure

Your 'src' folder is where you'll be doing your thing. As long as you have gulp running or run the gulp build command, your `/dist` folder would be the one you drop on a server (that is, if your not building some kind of CMS on top of it). The `/src` folder consists of four mayor sub folders:

#### - `/src/html`

The templates uses ZURB Foundation's Panini as your HTML templating engine (based on [Handlebars.js](http://google.nl)). Great for re-usability and workflow efficiency! You can use it as following:

* `/html/data` to store your .json data files to be used inside your templates
* `/html/helpers` to write your and store your own handlebars helpers
* `/html/layouts` to store your layouts, always needs a `default.html`
* `/html/pages` to store all your different pages (such as `index.html`, `about.html`, `contact.html` etc.)
* `/html/partials` to store all your different partials (such as `header.html`, `navigation.html`, `footer.html` etc.)

For a more indepth look on how to use Panini, check out the the [Foundation docs](https://foundation.zurb.com/sites/docs/panini.html) here. I've set up a default.html to get you started and an index.html with the example Flexbox based grid.

#### - `/src/img`

Your image folder simply contains your media assets. The Gulp tool imagmin optimizes this folder for you and generates the optimized images to the dist folder.

#### - `/src/js`

This contains all your JavaScript. You can structure it how you like, the concat Gulp plugin will concatinate all the .js files in the js and all it's sub folders.

#### - `/src/scss`

The scss folder of this templates contains a couple of presets set in `/scss/base` to get you going quick. Setting up a new project? Just 'tweak' these settings. I'll break it down a little so you can get around the structure quick:

* `/scss/base`
  * This folder contains all your base styles. See it as the foundation of everything you make. It contains your color variables, box shadows, borders, fonts, sizing and spacing system, grid and mobile breakpoints.
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
  * Sections in there turn contain a collection of blocks and bricks. The easiest examples would be the header and the footer of your website.
* `/scss/templates`
  * Templates are your page specific styles, for example home, about, shop or contact.
* `/scss/app.scss`
  * This files imports all your partials.

## Workflow example

This is just an example of what you could do with the template. You are ofcourse completely free to go about it as you please!

1. Download the template
2. Setup your color scheme in `/scss/base/_base-color`
3. Define a spacing system in `/scss/base/_base-space`
4. Define a sizing system in `/scss/base/_base-size`
5. If needed change your breakpoints in `/scss/base/_base-breakpoint.scss` and the grid width in `/scss/base/_base-grid.scss`
6. Run `gulp` in your command line
7. Structure your project partials in `/html/partials`, `/scss/brick` and `/scss/blocks`
8. Build up your pages, sections and templates in `/html/pages`, `/scss/sections` and `/scss/templates`
9. Write your nessecary JavaScript in `/src/js`
10. Deploy your compiled website from `/dist/` to your webserver

## Gulp plugins

* [@fortawesome/fontawesome-free](https://url.com) for Font Awesome 5 solid icons
* [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to add vendor prefixes to dist CSS
* [browserSync](https://url.com) to watch for changes and refresh on save SCSS, JS and HTML
* [cssnano](https://url.com) to minify css
* [del](https://url.com) to delete and rebuild dist folder when running gulp command
* [cache](https://url.com) to help with caching images
* [concat](https://url.com) for concatinating JavaScript
* [imagemin](https://url.com) for optimizing images
* [postcss](https://url.com) for ???
* [sass](https://url.com) for compiling scss files
* [sourcemaps](https://url.com) for debugging SCSS, JS and HTML in the browser
* [uglify](https://url.com) for minifying javascript
* [panini](https://url.com) from ZURB for templating your HTML files (based on Handlebars)

## Inspired by

Many awesome people and organisations on the web, including ZURB Foundation, Solved by Flexbox, Zell, CSS Tricks and many more awesome resources available on the web. Together we make  the web great.

## Feedback

If you've got any ideas on how to make this boilerplate better let me know! I'm always looking on how to improve and standardize my work so I can focus on what matters: creating new things :)

## License

MIT. Feel free to do as you please!
