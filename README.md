# DemoZap ⚡

[![npm version][npm-badge]][npm-url]
[![CI][build-badge]][build-url]
[![semantic-release][semantic-badge]][semantic-url]
[![prettier][prettier-badge]][prettier-url]
[![TypeScript][typescript-badge]][typescript-url]

_Easily create demos of React components_

Maintaining example code and demo separately makes it painful, it's easy to get them out of sync 🙅

Code can't lie, documentation can 💥

DemoZap CLI keeps your code up to date with demo 💪

[![](misc/demo.gif)](https://mkosir.github.io/demozap/?path=/story/examples--button-green-jsx-css)

## Usage

- Name component files as `[component_name].demozap.jsx`
- Run `npx demozap generate`

**Use created demos 🎉**

## [Demo 💥](https://mkosir.github.io/demozap)

## Install

React

```bash
npm install -D react-demo-tab
```

## Generated Demos

- Generated demo files are prefixed with `_`:  
  `MyComponent.demozap.jsx` → `_MyComponent.jsx`
- or set custom prefix:  
  `npx demozap generate --prefix=CustomPrefix`

## Built with DemoZap

- [React Tilt](https://github.com/mkosir/react-parallax-tilt) - [DemoZap](https://mkosir.github.io/react-parallax-tilt)
- [Mighty Mouse](https://github.com/mkosir/react-hook-mighty-mouse) - [DemoZap](https://mkosir.github.io/react-hook-mighty-mouse)
- [Magnetic Board](https://github.com/mkosir/react-magnetic-board) - [DemoZap](https://mkosir.github.io/react-magnetic-board)

## Manually create demos

To manually create demos instead via CLI use [DemoTab](https://github.com/mkosir/react-demo-tab) component.

## Contributing

All contributions are welcome!

[npm-url]: https://www.npmjs.com/package/demozap
[npm-badge]: https://img.shields.io/npm/v/demozap.svg
[build-badge]: https://github.com/mkosir/demozap/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/mkosir/demozap/actions/workflows/main.yml
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
