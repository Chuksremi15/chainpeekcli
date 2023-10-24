# Chain Peek CLI

<!-- toc -->
* [Chain Peek CLI](#chain-peek-cli)
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
chainpeekcli/1.1.0 darwin-x64 node-v18.16.0
$ peek --help [COMMAND]
USAGE
  $ peek COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`peek abi-events NAME`](#peek-abi-events-name)
* [`peek abi-methods NAME`](#peek-abi-methods-name)
* [`peek abi delete NAME`](#peek-abi-delete-name)
* [`peek abi event NAME`](#peek-abi-event-name)
* [`peek abi get NAME`](#peek-abi-get-name)
* [`peek abi list`](#peek-abi-list)
* [`peek abi method NAME`](#peek-abi-method-name)
* [`peek abi set NAME ABIPATH`](#peek-abi-set-name-abipath)
* [`peek address address-to-ens ADDRESS`](#peek-address-address-to-ens-address)
* [`peek address balance ADDRESS`](#peek-address-balance-address)
* [`peek address ens-to-address ENS`](#peek-address-ens-to-address-ens)
* [`peek block-number`](#peek-block-number)
* [`peek block number`](#peek-block-number-1)
* [`peek block transaction-hash [BLOCK_NUMBER]`](#peek-block-transaction-hash-block_number)
* [`peek contract ADDRESS ABI`](#peek-contract-address-abi)
* [`peek delete-abi NAME`](#peek-delete-abi-name)
* [`peek deploy FILENAME FILEPATH`](#peek-deploy-filename-filepath)
* [`peek event watch ADDRESS ABI EVENT`](#peek-event-watch-address-abi-event)
* [`peek events-watch ADDRESS ABI EVENT`](#peek-events-watch-address-abi-event)
* [`peek get-abi NAME`](#peek-get-abi-name)
* [`peek help [COMMANDS]`](#peek-help-commands)
* [`peek list-abi`](#peek-list-abi)
* [`peek plugins`](#peek-plugins)
* [`peek plugins:install PLUGIN...`](#peek-pluginsinstall-plugin)
* [`peek plugins:inspect PLUGIN...`](#peek-pluginsinspect-plugin)
* [`peek plugins:install PLUGIN...`](#peek-pluginsinstall-plugin-1)
* [`peek plugins:link PLUGIN`](#peek-pluginslink-plugin)
* [`peek plugins:uninstall PLUGIN...`](#peek-pluginsuninstall-plugin)
* [`peek plugins:uninstall PLUGIN...`](#peek-pluginsuninstall-plugin-1)
* [`peek plugins:uninstall PLUGIN...`](#peek-pluginsuninstall-plugin-2)
* [`peek plugins update`](#peek-plugins-update)
* [`peek set-abi NAME ABIPATH`](#peek-set-abi-name-abipath)
* [`peek wallet generate`](#peek-wallet-generate)

## `peek abi-events NAME`

lists all ABI events

```
USAGE
  $ peek abi-events NAME

ARGUMENTS
  NAME  abi name in storage

DESCRIPTION
  lists all ABI events

ALIASES
  $ peek abi-events

EXAMPLES
  $ peek abi-events erc20ABI
```

## `peek abi-methods NAME`

lists all methods of abi by providing name ABI is stored as

```
USAGE
  $ peek abi-methods NAME

ARGUMENTS
  NAME  abi name in storage

DESCRIPTION
  lists all methods of abi by providing name ABI is stored as

ALIASES
  $ peek abi-methods

EXAMPLES
  $ peek abi-methods erc20ABI
```

## `peek abi delete NAME`

Delete ABI stored in local storage by providing name ABI is stored as

```
USAGE
  $ peek abi delete NAME

ARGUMENTS
  NAME  name ABI is stored as

DESCRIPTION
  Delete ABI stored in local storage by providing name ABI is stored as

ALIASES
  $ peek delete-abi

EXAMPLES
  $ peek abi delete erc20ABI
```

_See code: [dist/commands/abi/delete.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/abi/delete.ts)_

## `peek abi event NAME`

lists all ABI events

```
USAGE
  $ peek abi event NAME

ARGUMENTS
  NAME  abi name in storage

DESCRIPTION
  lists all ABI events

ALIASES
  $ peek abi-events

EXAMPLES
  $ peek abi event erc20ABI
```

_See code: [dist/commands/abi/event.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/abi/event.ts)_

## `peek abi get NAME`

Get ABI stored in local storage by providing name ABI is stored as

```
USAGE
  $ peek abi get NAME

ARGUMENTS
  NAME  name ABI is stored as

DESCRIPTION
  Get ABI stored in local storage by providing name ABI is stored as

ALIASES
  $ peek get-abi

EXAMPLES
  $ peek abi get erc20ABI
```

_See code: [dist/commands/abi/get.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/abi/get.ts)_

## `peek abi list`

list the name of all stored ABIs

```
USAGE
  $ peek abi list

DESCRIPTION
  list the name of all stored ABIs

ALIASES
  $ peek list-abi

EXAMPLES
  $ peek abi list
```

_See code: [dist/commands/abi/list.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/abi/list.ts)_

## `peek abi method NAME`

lists all methods of abi by providing name ABI is stored as

```
USAGE
  $ peek abi method NAME

ARGUMENTS
  NAME  abi name in storage

DESCRIPTION
  lists all methods of abi by providing name ABI is stored as

ALIASES
  $ peek abi-methods

EXAMPLES
  $ peek abi method erc20ABI
```

_See code: [dist/commands/abi/method.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/abi/method.ts)_

## `peek abi set NAME ABIPATH`

Read contract abi from file path provided and stores to local storage

```
USAGE
  $ peek abi set NAME ABIPATH

ARGUMENTS
  NAME     name to store abi as
  ABIPATH  abi file path

DESCRIPTION
  Read contract abi from file path provided and stores to local storage

ALIASES
  $ peek set-abi

EXAMPLES
  $ peek abi set erc20ABI src/abi/erc20abi.json
```

_See code: [dist/commands/abi/set.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/abi/set.ts)_

## `peek address address-to-ens ADDRESS`

Performs a reverse lookup of the address in ENS using the Reverse Registrar. If the name does not exist, or the forward lookup does not match, null is returned

```
USAGE
  $ peek address address-to-ens ADDRESS [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ADDRESS  wallet address or contract address

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  Performs a reverse lookup of the address in ENS using the Reverse Registrar. If the name does not exist, or the
  forward lookup does not match, null is returned

EXAMPLES
  $ peek address address-to-ens  0x34aA3F359A9D614239015126635CE7732c18fDF3 --mainnet

  $ peek address address-to-ens  0x34aA3F359A9D614239015126635CE7732c18fDF3 --rpc_url=[PROVIDER_URL]
```

_See code: [dist/commands/address/address-to-ens.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/address/address-to-ens.ts)_

## `peek address balance ADDRESS`

Get address balance

```
USAGE
  $ peek address balance ADDRESS [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ADDRESS  wallet address or contract address

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  Get address balance

EXAMPLES
  $ peek address balance
```

_See code: [dist/commands/address/balance.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/address/balance.ts)_

## `peek address ens-to-address ENS`

Looks up the address of name. If the name is not owned, or does not have a Resolver configured, or the Resolver does not have an address configured, null is returned.

```
USAGE
  $ peek address ens-to-address ENS [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum | --arbitrumGoerli
    | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ENS  An existing ens

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  Looks up the address of name. If the name is not owned, or does not have a Resolver configured, or the Resolver does
  not have an address configured, null is returned.

EXAMPLES
  $ peek address ens-to-address atg.eth --mainnet

  $ peek address ens-to-address atg.eth --rpc_url=[PROVIDER_URL]
```

_See code: [dist/commands/address/ens-to-address.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/address/ens-to-address.ts)_

## `peek block-number`

Returns the block number of the most recently mined block. Default network: localhost

```
USAGE
  $ peek block-number [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum | --arbitrumGoerli |
    --optimism | --optimismGoerli | --polygon | --polygonMumbai]

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  Returns the block number of the most recently mined block. Default network: localhost

ALIASES
  $ peek block-number

EXAMPLES
  $ peek block-number --mainnet

  $ peek block-number --rpc_url=[PROVIDER_URL]
```

## `peek block number`

Returns the block number of the most recently mined block. Default network: localhost

```
USAGE
  $ peek block number [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum | --arbitrumGoerli |
    --optimism | --optimismGoerli | --polygon | --polygonMumbai]

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  Returns the block number of the most recently mined block. Default network: localhost

ALIASES
  $ peek block-number

EXAMPLES
  $ peek block number --mainnet

  $ peek block number --rpc_url=[PROVIDER_URL]
```

_See code: [dist/commands/block/number.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/block/number.ts)_

## `peek block transaction-hash [BLOCK_NUMBER]`

get transaction details and hash of block. If block is not provider, details of latest block is returned

```
USAGE
  $ peek block transaction-hash [BLOCK_NUMBER] [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai] [--json]

ARGUMENTS
  BLOCK_NUMBER  block number

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  get transaction details and hash of block. If block is not provider, details of latest block is returned

EXAMPLES
  $ peek block transaction-hash 4474398 --sepolia

  $ peek block transaction-hash 4474398 --rpc_url=[PROVIDER_URL]
```

_See code: [dist/commands/block/transaction-hash.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/block/transaction-hash.ts)_

## `peek contract ADDRESS ABI`

Create a contract instance and interact with the contract methods in a REPL environment

```
USAGE
  $ peek contract ADDRESS ABI [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai] [--private_key <value>]

ARGUMENTS
  ADDRESS  contract address
  ABI      name of abi saved using `peek set-abi`

FLAGS
  --arbitrum             provider network
  --arbitrumGoerli       provider network
  --goerli               provider network
  --mainnet              provider network
  --optimism             provider network
  --optimismGoerli       provider network
  --polygon              provider network
  --polygonMumbai        provider network
  --private_key=<value>  private key of transaction signer
  --rpc_url=<value>      provider network rpc url
  --sepolia              provider network

DESCRIPTION
  Create a contract instance and interact with the contract methods in a REPL environment

EXAMPLES
  $ peek contract 0x62d77aF1c22277D227269ceC3868c59471c0f9ed erc20ABI --mainnet

  > await contract.name()

  > await contract.getterFunction()

  $ peek contract 0x62d77aF1c22277D227269ceC3868c59471c0f9ed erc20ABI --private_key=0x00000000000000000000000000000000000000000000 --mainnet

  > await contract.mint()

  > await contract.setterFunction({value: '10000000000000'})
```

_See code: [dist/commands/contract/index.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/contract/index.ts)_

## `peek delete-abi NAME`

Delete ABI stored in local storage by providing name ABI is stored as

```
USAGE
  $ peek delete-abi NAME

ARGUMENTS
  NAME  name ABI is stored as

DESCRIPTION
  Delete ABI stored in local storage by providing name ABI is stored as

ALIASES
  $ peek delete-abi

EXAMPLES
  $ peek delete-abi erc20ABI
```

## `peek deploy FILENAME FILEPATH`

Create a contract instance and interact with the contract methods in a REPL environment

```
USAGE
  $ peek deploy FILENAME FILEPATH [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai] [--private_key <value>]

ARGUMENTS
  FILENAME  contract file name
  FILEPATH  contract file path

FLAGS
  --arbitrum             provider network
  --arbitrumGoerli       provider network
  --goerli               provider network
  --mainnet              provider network
  --optimism             provider network
  --optimismGoerli       provider network
  --polygon              provider network
  --polygonMumbai        provider network
  --private_key=<value>  private key of deployer address
  --rpc_url=<value>      provider network rpc url
  --sepolia              provider network

DESCRIPTION
  Create a contract instance and interact with the contract methods in a REPL environment

EXAMPLES
  $ peek deploy 0x62d77aF1c22277D227269ceC3868c59471c0f9ed erc20ABI --mainnet

  > await contract.name()

  > await contract.getterFunction()

  $ peek deploy 0x62d77aF1c22277D227269ceC3868c59471c0f9ed erc20ABI --private_key=0x00000000000000000000000000000000000000000000 --mainnet

  > await contract.mint()

  > await contract.setterFunction({value: '10000000000000'})
```

_See code: [dist/commands/deploy/index.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/deploy/index.ts)_

## `peek event watch ADDRESS ABI EVENT`

emits new events from contract

```
USAGE
  $ peek event watch ADDRESS ABI EVENT [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ADDRESS  contract address
  ABI      name of abi saved using `peek set-abi`
  EVENT    event to watch

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  emits new events from contract

ALIASES
  $ peek events-watch

EXAMPLES
  $ peek event watch 0xF51CD0d607c82db2B7EB670554C82C276A9549B4 erc20ABI Transfer --mainnet
```

_See code: [dist/commands/event/watch.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/event/watch.ts)_

## `peek events-watch ADDRESS ABI EVENT`

emits new events from contract

```
USAGE
  $ peek events-watch ADDRESS ABI EVENT [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ADDRESS  contract address
  ABI      name of abi saved using `peek set-abi`
  EVENT    event to watch

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  emits new events from contract

ALIASES
  $ peek events-watch

EXAMPLES
  $ peek events-watch 0xF51CD0d607c82db2B7EB670554C82C276A9549B4 erc20ABI Transfer --mainnet
```

## `peek get-abi NAME`

Get ABI stored in local storage by providing name ABI is stored as

```
USAGE
  $ peek get-abi NAME

ARGUMENTS
  NAME  name ABI is stored as

DESCRIPTION
  Get ABI stored in local storage by providing name ABI is stored as

ALIASES
  $ peek get-abi

EXAMPLES
  $ peek get-abi erc20ABI
```

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

## `peek list-abi`

list the name of all stored ABIs

```
USAGE
  $ peek list-abi

DESCRIPTION
  list the name of all stored ABIs

ALIASES
  $ peek list-abi

EXAMPLES
  $ peek list-abi
```

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

## `peek set-abi NAME ABIPATH`

Read contract abi from file path provided and stores to local storage

```
USAGE
  $ peek set-abi NAME ABIPATH

ARGUMENTS
  NAME     name to store abi as
  ABIPATH  abi file path

DESCRIPTION
  Read contract abi from file path provided and stores to local storage

ALIASES
  $ peek set-abi

EXAMPLES
  $ peek set-abi erc20ABI src/abi/erc20abi.json
```

## `peek wallet generate`

generates a new random account

```
USAGE
  $ peek wallet generate [--no-export]

FLAGS
  --no-export  disables export for mnemonic and private key to 'new-wallet.json' file in current directory

DESCRIPTION
  generates a new random account

EXAMPLES
  $ peek wallet generate generateAccount

  $ peek wallet generate generateAccount --no-export
```

_See code: [dist/commands/wallet/generate.ts](https://github.com/Chuksremi15/chainpeekcli/blob/v1.1.0/dist/commands/wallet/generate.ts)_
<!-- commandsstop -->
