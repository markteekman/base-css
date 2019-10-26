# BaseCSS

A responsive front-end boilerplate that uses Gulp, a simple Flexbox grid and basic Design System patterns to get you working on new ideas faster instead of having to set up a lot of stuff over and over again (DRY). The template uses a couple of Gulp plugins to get you up and running and creating a new project in no time. The SCSS contains a couple of foundations for each project you create (like colors, fonts, grid, breakpoints, shadows, spacing, sizing, borders etc.). BaseCSS runs your HTML, SCSS, JavaScript and images from the `/src` folder to a directly distributable `/dist` folder.

## How to use

Either hit the **Use this template** button at the top of this page to create a repository based on this template or clone/download BaseCSS to your local computer (on GitHub). Start with installing the necessary Gulp plugins by typing the following command in the command line from within your local project folder. Example:

```
git clone https://github.com/markteekman/BaseCSS
cd BaseCSS
npm install
```

Now either run Gulp for building your project and automatically watch for changes in your HTML, SCSS and JavaScript:

```
gulp
```

Or just build your project once without watching for changes:

```
gulp build
```

If you get an error about a missing binding run:

```
npm rebuild node-sass
```

When you use the `gulp` command you can check your project in your browser using BrowserSync by accessing a local address like `http://localhost:8000`. Use the address BrowserSync gives back to you in your command line tool. BrowserSync automatically reloads the browser when changes happen in your HTML, SCSS or JavaScript.

To use the free Font Awesome 5 Solid Icons library that's included in BaseCSS you can use something like

```html
<i class="fas fa-home"></i>
```

in your HTML. The Font Awesome JavaScript will convert this tag into an accessible SVG which you can easily manipulate through your SCSS files with your own classes or a global `.svg-inline--fa` class. To see all the icons you can use, checkout the [Font Awesome Icon Gallery](https://fontawesome.com/icons?d=gallery). If you don't want to use Font Awesome you can simply remove the package:

```
npm remove --save-dev @fortawesome/fontawesome-free
```

and update your Gulp file by removing the copy function (faJS):

```javascript
// remove this and all faJS instances when you don't want to use font awesome
const faJs = () => {
	return src("node_modules/@fortawesome/fontawesome-free/js/all.min.js")
	.pipe(dest("src/js/libs"));
}
```

### File structure

Your `/src` folder is where you'll be doing your thing. As long as you have `gulp` running or have run the `gulp build` command at least once, you have a `/dist` folder that you can drop on a server (that is, if your not building some kind of CMS behind it). The `/src` folder consists of four mayor sub folders:

#### - `/src/html`

BaseCSS uses ZURB Foundation's Panini as your HTML templating engine (which in turn uses [Handlebars.js](https://handlebarsjs.com/)). Great for re-usability of HTML code and for your workflow efficiency! This is what your `/html` folder structure looks like and how you use it:

* `/html/layouts` to store your layouts, always requires a `default.html`
* `/html/pages` to store all your different pages (such as `index.html`, `about.html`, `contact.html` etc.)
* `/html/partials` to store all your different partials (such as `header.html`, `navigation.html`, `footer.html` etc.)

For a more indepth look on how to use Panini, check out the the [Foundation docs](https://foundation.zurb.com/sites/docs/panini.html) here. I've set up a `default.html` to get you started and an `index.html` with an example of the Flexbox based grid.

#### - `/src/img`

Your image folder simply contains your media assets. The Gulp plugin **gulp-imagmin** optimizes this folder for you and generates the optimized images to the `/dist` folder. You can use Panini's `{{root}}` function to link to your image, for example:

```html
<img src="{{root}}img/placeholder-logo.png" />
```

#### - `/src/js`

This folder contains all your JavaScript. You can structure it how you like, the Gulp plugin **gulp-concat** will concatenate all the .js files in `/src/js` and all it's sub folders. In `/js/libs` you can include different libraries (this is where the Font Awesome JavaScript is for example).

#### - `/src/scss`

The scss folder of this templates contains a couple of presets set in `/scss/base` to get you going quick. Setting up a new project? Just 'tweak' these settings. I'll break it down a little so you know where to go:

* `/scss/base`
  * This folder contains all your base styles. See it as the foundation  of everything you make. It contains your color variables, box shadows mixins, borders mixins, fonts, sizing mixins, spacing variables, grid and mobile breakpoints.
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
* `/scss/brick`
	 * Bricks are the smallest components of your system like lists, buttons, form elements, labels etc. Use what you define in base to build your bricks.
* `/scss/block`
	 * Blocks are a collection of your bricks, things like navigation menu's, dropdown's, call to actions, widgets, cards etc. go here. Use what you define in base and bricks to build your blocks.
* `/scss/section`
  * Sections contain a collection of blocks and bricks. The easiest examples would be the header and footer of your website.
* `/scss/template`
  * Templates are your page specific styles, for example home, about, shop or contact.
* `/scss/app.scss`
  * This files imports all your SCSS partials. Don't forget to include new ones here.

## Workflow example

This is just an example of how you could use this template. You are, of course, completely free to go about it as you please!

1. Download and install the template (refer to "how to use")
2. Setup your color scheme in `/scss/base/_base-color`
3. Define a spacing system in `/scss/base/_base-space` (or just use the default)
4. Define a sizing system in `/scss/base/_base-size` (or just use the default)
5. If needed change your breakpoints in `/scss/base/_base-breakpoint.scss` and the grid width in `/scss/base/_base-grid.scss`
6. Run `gulp` in your command line to run BrowserSync and start watching for changes
7. Structure your project partials in `/html/partials`, `/scss/brick` and `/scss/block`
8. Build up your pages, sections and templates in `/html/pages`, `/scss/section` and `/scss/template`
9. Write your necessary JavaScript in `/src/js`
10. Deploy your compiled website from the `/dist` folder to your webserver

## Gulp plugins

* [@babel/core](https://www.npmjs.com/package/@babel/core) compiler core, for compiling JavaScript ES6 into backwards compatible code.
* [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) presets for different ES environments.
* [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free) Font Awesome 5 solid icons.
* [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) automatically add vendor prefixes to CSS.
* [browserSync](https://www.npmjs.com/package/browser-sync) watch for changes in HTML, SCSS and JavaScript and refresh browser accordingly.
* [cssnano](https://www.npmjs.com/package/cssnano) minify CSS.
* [del](https://www.npmjs.com/package/del) delete and rebuild the `/dist` folder when running the `gulp` or `gulp build` command.
* [gulp](https://www.npmjs.com/package/gulp) task automation of Gulp plugins.
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) use babel pipe task in gulp file.
* [gulp-cache](https://www.npmjs.com/package/gulp-cache) cache images.
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) concatenate all JavaScript into one .js file.
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) automatically optimize images.
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) use autoprefixer and cssnano tasks.
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) compile SCSS files into one .css file.
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) debug SCSS and JavaScript in the browser.
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) minify the concatenated JavaScript file.
* [panini](https://www.npmjs.com/package/panini) template engine for your HTML.
* [scss-resets](https://www.npmjs.com/package/scss-resets) include popular SCSS resets.

## Inspired by

Many awesome people and organizations around the world, including ZURB Foundation, Solved by Flexbox, Zell, CSS Tricks and many more. Made to support the Open Source mindset.

## Feedback

If you've got any ideas on how to improve this template then let me know! I'm always looking on how to optimize and standardize my work so I can focus on what matters: creating new things :)

## License

MIT. Feel free to do as you please!
