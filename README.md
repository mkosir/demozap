# React DocTab 📑

[![npm version][npm-badge]][npm-url]
[![build status][build-badge]][build-url]
[![oclif][oclif-badge]][oclif-url]
[![prettier][prettier-badge]][prettier-url]

_Generate React component code as documentation tabs 📑_

![](demo.gif)

Maintaining code and documentation separately makes it painful, it's easy to get them out of sync 🙅

Code can't lie, documentation can 💥

DocTab keeps your documentation up to date 💪

## Install

- npm  
  `npm install react-doc-tab --save-dev`  
  `npm install react-doc-tab-template --save-dev`
- yarn  
  `yarn add react-doc-tab --save-dev`  
  `yarn add react-doc-tab-template --save-dev`

## Demo

**[DocTab live demo](https://mkosir.github.io/react-doc-tab)**

## Usage

To generate DocTab components in your project:

- default export component and name files as:
  - **`[filename].doctab.[ext]`**
- from your terminal:
  - cd into your project
  - run **`$ doctab generate`**

Import generated DocTab components. 🎉

## Generated DocTab Files

- By default generated files will be prefixed with `_` for example:  
  `MyComponent.doctab.jsx` & `MyComponent.doctab.css` -> `_MyComponent.jsx`
- You can set custom prefix with `--prefix` flag:  
  `$ doctab generate --prefix=CustomPrefix`

## Built with DocTab

- React Tilt - [Repo](https://github.com/mkosir/react-parallax-tilt) - [DocTab](https://mkosir.github.io/react-parallax-tilt)
- Mighty Mouse - [Repo](https://github.com/mkosir/react-hook-mighty-mouse) - [DocTab](https://mkosir.github.io/react-hook-mighty-mouse)
- Magnetic Board - [Repo](https://github.com/mkosir/react-magnetic-board) - [DocTab](https://mkosir.github.io/react-magnetic-board)

## License

[MIT](LICENSE)

[npm-badge]: https://img.shields.io/npm/v/react-doc-tab.svg
[npm-url]: https://www.npmjs.com/package/react-doc-tab
[build-badge]: https://travis-ci.com/mkosir/react-doc-tab.svg
[build-url]: https://travis-ci.com/mkosir/react-doc-tab
[oclif-badge]: https://img.shields.io/badge/cli-oclif-brightgreen.svg
[oclif-url]: https://oclif.io
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
