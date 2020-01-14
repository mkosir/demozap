# React DocTab 📑

[![npm version][npm-badge]][npm-url]
[![build status][build-badge]][build-url]
[![oclif][oclif-badge]][oclif-url]
[![storybook][storybook-badge]][storybook-url]

_Generate React component code as documentation tabs 📑_

![](demo.gif)

Maintaining code and documentation separately makes it painful, it's easy to get them out of sync 🙅

Code can't lie, documentation can 💥

StoryTab keeps your documentation up to date 💪

## Installation

```bash
$ npm install doc-tab --save-dev
$ npm install doc-tab-react --save-dev
```

## Demo

**[DocTab live demo](https://mkosir.github.io/story-tab)**

## Usage

To generate DocTab components in your project:

- default export component and name files as:
  - **`[filename].storytab.[ext]`**
- from your terminal:
  - cd into your project
  - run **`$ doctab generate`**

Import generated DocTab components. 🎉

## Generated DocTab Files

- By default generated files will be prefixed with `_` for example:  
  `MyComponent.doctab.jsx` & `MyComponent.doctab.css` -> `_MyComponent.jsx`
- You can set custom prefix with `--prefix` flag:  
  `$ storytab generate --prefix=CustomPrefix`

## Commands

- Generate component code as documentation tabs

  ```
  $ storytab generate
  ```
  
  Options:  
  `--prefix` - generate StoryTab components with filename prefix (default `'_'`)

- List DocTab possible commands
  ```
  $ doctab help
  ```
- List DocTab command details

  ```
  $ doctab help [name of command]
  ```

## Built with DocTab

- React Tilt - [Repo](https://github.com/mkosir/react-parallax-tilt) - [DocTab](https://mkosir.github.io/react-parallax-tilt)
- Mighty Mouse - [Repo](https://github.com/mkosir/react-hook-mighty-mouse) - [DocTab](https://mkosir.github.io/react-hook-mighty-mouse)
- Magnetic Board - [Repo](https://github.com/mkosir/react-magnetic-board) - [DocTab](https://mkosir.github.io/react-magnetic-board)

## License

[MIT](LICENSE)

[npm-badge]: https://img.shields.io/npm/v/story-tab.svg
[npm-url]: https://www.npmjs.com/package/story-tab
[build-badge]: https://travis-ci.com/mkosir/story-tab.svg
[build-url]: https://travis-ci.com/mkosir/story-tab
[oclif-badge]: https://img.shields.io/badge/cli-oclif-brightgreen.svg
[oclif-url]: https://oclif.io
[storybook-badge]: https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg
[storybook-url]: https://github.com/storybookjs/storybook
