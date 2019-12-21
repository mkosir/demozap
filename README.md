# StoryTab 📑

_Generate documentation in Storybook tab 📑_

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![npm version][npm-badge]][npm-url]
[![TypeScript][typescript-badge]][typescript-url]

<!-- toc -->

- [StoryTab 📑](#storytab-)
- [Commands](#commands)
  <!-- tocstop -->

## Install

Install StoryTab

- npm `npm install story-tab --save-dev`
- yarn `yarn add story-tab --dev`

Install StoryTab Template for _framework_ that you are using:

_React_

- npm `npm install story-tab-template-react`
- yarn `yarn add story-tab-template-react`

## Usage

To generate StoryTab components in your project:

- name files as `[file name].storytab.[ext]`
- in your terminal run `storytab generate react`

Use generated storytab components in Storybook.

All generated files will be prefixed with `_` for example:

- `MyComponent.storytab.jsx` -> `\_MyComponent.jsx`
- `MyComponent.storytab.css` -> `\_MyComponent.css`

# Commands

<!-- commands -->

- [`storytab generate FRAMEWORK`](#storytab-generate-framework)
- [`storytab help [COMMAND]`](#storytab-help-command)

## `storytab generate FRAMEWORK`

generate documentation

```
USAGE
  $ storytab generate FRAMEWORK

ARGUMENTS
  FRAMEWORK  (react) generate StoryTab for desired framework

OPTIONS
  --ts  generate StoryTab in TypeScript
```

_See code: [src/commands/generate.ts](https://github.com/mkosir/story-tab/blob/v1.0.5/src/commands/generate.ts)_

## `storytab help [COMMAND]`

display help for storytab

```
USAGE
  $ storytab help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.2/src/commands/help.ts)_

<!-- commandsstop -->

[npm-url]: https://www.npmjs.com/package/story-tab
[npm-badge]: https://img.shields.io/npm/v/story-tab.svg
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
