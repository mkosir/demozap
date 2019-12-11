# StoryTab 📑

Generate documentation in Storybook tab 📑

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/story-tab.svg)](https://npmjs.org/package/story-tab)
[![Downloads/week](https://img.shields.io/npm/dw/story-tab.svg)](https://npmjs.org/package/story-tab)
[![License](https://img.shields.io/npm/l/story-tab.svg)](https://github.com/mkosir/story-tab/blob/master/package.json)

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
* [`storytab hello [FILE]`](#storytab-hello-file)
* [`storytab help [COMMAND]`](#storytab-help-command)

## `storytab generate [FILE]`

describe the command here

```
USAGE
  $ storytab generate [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generate.ts](https://github.com/mkosir/story-tab/blob/v1.0.0/src/commands/generate.ts)_

## `storytab hello [FILE]`

describe the command here

```
USAGE
  $ storytab hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ storytab hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mkosir/story-tab/blob/v1.0.0/src/commands/hello.ts)_

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
