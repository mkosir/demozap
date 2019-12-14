# StoryTab 📑

Generate documentation in Storybook tab 📑

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![npm version][npm-badge]][npm-url]
[![TypeScript][typescript-badge]][typescript-url]

<!-- toc -->
* [StoryTab 📑](#storytab-)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g story-tab
$ storytab COMMAND
running command...
$ storytab (-v|--version|version)
story-tab/1.0.0 darwin-x64 node-v12.12.0
$ storytab --help [COMMAND]
USAGE
  $ storytab COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`storytab generate [FILE]`](#storytab-generate-file)
* [`storytab help [COMMAND]`](#storytab-help-command)

## `storytab generate [FILE]`

generate documentation

```
USAGE
  $ storytab generate [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generate.ts](https://github.com/mkosir/story-tab/blob/v1.0.0/src/commands/generate.ts)_

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
