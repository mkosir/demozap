# StoryTab 📑

[![npm version][npm-badge]][npm-url]
[![build status][build-badge]][build-url]
[![oclif][oclif-badge]][oclif-url]
[![storybook][storybook-badge]][storybook-url]

_Generate documentation in Storybook tab 📑_

<!-- GIF -->

## Install

Install:

- StoryTab  
  &nbsp;&nbsp;npm `npm install story-tab --save-dev` or globally `npm install story-tab -g`  
  &nbsp;&nbsp;yarn `yarn add story-tab --dev` or globally `yarn global add story-tab`
- StoryTab Template for intended _framework_:  
  &nbsp;&nbsp;_React_  
  &nbsp;&nbsp;npm `npm install story-tab-template-react --save-dev`  
  &nbsp;&nbsp;yarn `yarn add story-tab-template-react --dev`

## Demo

**[StoryTab live demo](https://mkosir.github.io/story-tab)**

## Usage

To generate StoryTab components in your project:

- default export component and name file as:
  - **`[filename].storytab.[ext]`**
- from your terminal:
  - cd into your project
  - run **`$ storytab generate react`**

Import generated StoryTab components into Storybook. 🎉

## Generated StoryTab Files

- By default generated files will be prefixed with `_` for example:  
  `MyComponent.storytab.jsx` & `MyComponent.storytab.css` -> `_MyComponent.jsx`
- You can set custom prefix with `--prefix` flag:  
  `$ storytab generate react --prefix=CustomPrefix`

- Import generated StoryTab component and use it in story:

  ```jsx
  import React from 'react';
  import { storiesOf } from '@storybook/react';

  import ButtonGreen from './_ButtonGreen';
  import ButtonRed from './_ButtonRed';

  const stories = storiesOf('Button', module);

  stories.add('Green Button', () => <ButtonGreen />).add('Red Button', () => <ButtonRed />);
  ```

## Commands

- list StoryTab possible commands
  ```console
  $ storytab help
  ```
- list StoryTab command details
  ```console
  $ storytab help [name of command]
  ```

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
