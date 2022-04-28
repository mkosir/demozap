# React DemoTab CLI 📑

[![npm version][npm-badge]][npm-url]
[![CI][build-badge]][build-url]
[![oclif][oclif-badge]][oclif-url]
[![semantic-release][semantic-badge]][semantic-url]
[![prettier][prettier-badge]][prettier-url]
[![TypeScript][typescript-badge]][typescript-url]

_Easily create demos of React components_

![](demo.gif)

Maintaining example code and demo separately makes it painful, it's easy to get them out of sync 🙅

Code can't lie, documentation can 💥

DemoTab CLI keeps your code up to date with demo 💪

## Install

```bash
npm install -D react-demo-tab react-demo-tab-cli
```

## Demo

**[DemoTab example](https://mkosir.github.io/react-demo-tab-cli)**

## Usage 🚀

To use CLI in your project:

1. default export react components that you wish to create demos of
1. name component file as **`[filename].demotab.jsx`**
1. run **`$ npx react-demo-tab-cli generate`**

**Use created demos 🎉**

## Generated Demos

- By default generated demo files will be prefixed with `_` for example:  
  `MyComponent.demotab.jsx` & `MyComponent.demotab.css` -> `_MyComponent.jsx`
- You can set custom prefix with `--prefix` flag:  
  `$ demotab generate --prefix=CustomPrefix`

## Built with DemoTab

- React Tilt - [Repo](https://github.com/mkosir/react-parallax-tilt) - [DemoTab](https://mkosir.github.io/react-parallax-tilt)
- Mighty Mouse - [Repo](https://github.com/mkosir/react-hook-mighty-mouse) - [DemoTab](https://mkosir.github.io/react-hook-mighty-mouse)
- Magnetic Board - [Repo](https://github.com/mkosir/react-magnetic-board) - [DemoTab](https://mkosir.github.io/react-magnetic-board)

## Manually create demos

To manually create demos instead via CLI just [React DemoTab](https://github.com/mkosir/react-demo-tab) component.

## Contributing

All contributions are welcome!

[npm-url]: https://www.npmjs.com/package/react-demo-tab-cli
[npm-badge]: https://img.shields.io/npm/v/react-demo-tab-cli.svg
[build-badge]: https://github.com/mkosir/react-demo-tab-cli/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/mkosir/react-demo-tab-cli/actions/workflows/main.yml
[oclif-badge]: https://img.shields.io/badge/cli-oclif-brightgreen.svg
[oclif-url]: https://oclif.io
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
