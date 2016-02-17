# Trying React, Redux and Immutable

Made this for learning purposes. Do not use.

Tried to bind React 0.14 writing ES6 Stateless components and using Redux using Immutable.

**Tests are broken.**

*Maybe it's not hard to fix tests but my focus was on Redux+Immutable+Stateless Components*

Tutorial that I followed: [Sitepoint's How to Build a Todo App Using React, Redux and Immutable.js](http://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/)

## React seed

A boilerplate for building React apps with ES6 and webpack.

Please follow it's [git repo](https://github.com/badsyntax/react-seed/) for more info.

### What I changed

* React 0.13 => React 0.14 (w/ ReactDOM)
* I had to update phantomjs & babel-eslint
* Thinking on replace **sass** for **stylus**, but nothing done

### npm scripts

* `npm start` - Build and start the app in dev mode at http://localhost:8000
* `npm test` - Run the tests
* `npm run build` - Run a production build

### Sass, CSS & webpack

`import` Sass and CSS files from within your JavaScript component files:

```js
// Filename: app.jsx
import 'normalize.css/normalize.css';
import './scss/app.scss';
```

* **Important note:** If you're importing component Sass files within your JavaScript component files, then each sass file will be compiled as part of a different process, and thus you cannot share global references. See [this issue](https://github.com/jtangelder/sass-loader/issues/105) for more information.
* Sass include paths can be adjusted in the `webpack/loaders.js` file.
* All CSS (compiled or otherwise) is run through Autoprefixer.
* CSS files are combined in the order in which they are imported in JavaScript, thus
you should always import your CSS/Sass before importing any other JavaScript files.
* Use an approach like [BEM](http://cssguidelin.es/#bem-like-naming) to avoid specificity
issues that might exist due to unpredicatable order of CSS rules.

### HTML files

All required `.html` files are compiled with lodash.template and synced into the `./build` directory:

```js
// Filename: app.jsx
import './index.html';
```

* You can adjust the lodash template data in the `webpack/loaders.js` file.

### Conventions

* ~~Use fat arrows for anonymous functions~~ *Arrow functions everywhere*
* Don't use `var`. Use `let` and `const`.

### Credits

This project was initially forked from https://github.com/badsyntax/react-seed

### License for React Seed

Copyright (c) 2015 Richard Willis

MIT (http://opensource.org/licenses/MIT)

## License

MIT (http://opensource.org/licenses/MIT)
