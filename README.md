oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g chainpeekcli
$ peek COMMAND
running command...
$ peek (--version)
chainpeekcli/0.0.0 darwin-x64 node-v18.16.0
$ peek --help [COMMAND]
USAGE
  $ peek COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`peek hello PERSON`](#peek-hello-person)
* [`peek hello world`](#peek-hello-world)
* [`peek help [COMMANDS]`](#peek-help-commands)
* [`peek plugins`](#peek-plugins)
* [`peek plugins:install PLUGIN...`](#peek-pluginsinstall-plugin)
* [`peek plugins:inspect PLUGIN...`](#peek-pluginsinspect-plugin)
* [`peek plugins:install PLUGIN...`](#peek-pluginsinstall-plugin-1)
* [`peek plugins:link PLUGIN`](#peek-pluginslink-plugin)
* [`peek plugins:uninstall PLUGIN...`](#peek-pluginsuninstall-plugin)
* [`peek plugins:uninstall PLUGIN...`](#peek-pluginsuninstall-plugin-1)
* [`peek plugins:uninstall PLUGIN...`](#peek-pluginsuninstall-plugin-2)
* [`peek plugins update`](#peek-plugins-update)

## `peek hello PERSON`

Say hello

```
USAGE
  $ peek hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `peek hello world`

Say hello world

```
USAGE
  $ peek hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ peek hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v0.0.0/dist/commands/hello/world.ts)_

## `peek help [COMMANDS]`

Display help for peek.

```
USAGE
  $ peek help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for peek.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `peek plugins`

List installed plugins.

```
USAGE
  $ peek plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ peek plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/index.ts)_

## `peek plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ peek plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ peek plugins add

EXAMPLES
  $ peek plugins:install myplugin 

  $ peek plugins:install https://github.com/someuser/someplugin

  $ peek plugins:install someuser/someplugin
```

## `peek plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ peek plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ peek plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/inspect.ts)_

## `peek plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ peek plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ peek plugins add

EXAMPLES
  $ peek plugins:install myplugin 

  $ peek plugins:install https://github.com/someuser/someplugin

  $ peek plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/install.ts)_

## `peek plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ peek plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ peek plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/link.ts)_

## `peek plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ peek plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ peek plugins unlink
  $ peek plugins remove
```

## `peek plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ peek plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ peek plugins unlink
  $ peek plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/uninstall.ts)_

## `peek plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ peek plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ peek plugins unlink
  $ peek plugins remove
```

## `peek plugins update`

Update installed plugins.

```
USAGE
  $ peek plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
