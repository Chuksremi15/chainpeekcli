import { Args, Command, Flags } from "@oclif/core";
import {
  InterfaceAbi,
  JsonRpcProvider,
  Provider,
  ethers,
  ContractFactory,
} from "ethers";
import Conf from "conf";
import * as repl from "repl";
import * as chalk from "chalk";
const solc = require("solc");
import * as fs from "fs";

import { providerNetworkFlags } from "../../utils/network";
import { getProvider } from "../../utils/provider";

const store = new Conf();

export default class DeployContract extends Command {
  static description =
    "Create a contract instance and interact with the contract methods in a REPL environment";

  static examples = [
    "<%= config.bin %> <%= command.id %> 0x62d77aF1c22277D227269ceC3868c59471c0f9ed erc20ABI --mainnet",
    "> await contract.name()",
    "> await contract.getterFunction()",
    "<%= config.bin %> <%= command.id %> 0x62d77aF1c22277D227269ceC3868c59471c0f9ed erc20ABI --private_key=0x00000000000000000000000000000000000000000000 --mainnet",
    "> await contract.mint()",
    "> await contract.setterFunction({value: '10000000000000'})",
  ];

  static flags = {
    ...providerNetworkFlags,
    private_key: Flags.string({
      description: "private key of deployer address",
    }),
  };

  static args = {
    fileName: Args.string({
      description: "contract file name",
      required: true,
    }),
    filePath: Args.string({
      description: "contract file path",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(DeployContract);

    const sourceCode = fs.readFileSync(args.filePath, {
      encoding: "utf8",
    });

    let provider = getProvider(flags);
    let signer;

    if (flags.private_key) {
      signer = new ethers.Wallet(flags.private_key, provider);
    }

    const fileName = args.fileName;

    var input = {
      language: "Solidity",
      sources: {
        [fileName]: {
          content: sourceCode,
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    };

    const compiledCode = JSON.parse(solc.compile(JSON.stringify(input)));

    const TARGET_DIR = "./generated/";

    if (!fs.existsSync(TARGET_DIR)) {
      fs.mkdirSync(TARGET_DIR);
    }

    let bytecode = "";
    let abi = "";

    for (var contractName in compiledCode.contracts[fileName]) {
      bytecode =
        compiledCode.contracts[fileName][contractName].evm.bytecode.object;

      fs.writeFileSync(`${TARGET_DIR}bytecode.json`, bytecode);

      abi = compiledCode.contracts[fileName][contractName].abi;

      fs.writeFileSync(`${TARGET_DIR}abi.json`, JSON.stringify(abi));
    }

    const factory = new ContractFactory(abi, bytecode, signer);

    // If your contract requires constructor args, you can specify them here
    const contract = await factory.deploy();

    let deployedContract = {
      network: "sepolia",
      address: contract.target,
      abi,
      bytecode,
    };

    fs.writeFileSync(
      `${TARGET_DIR}deployedContract.json`,
      JSON.stringify(deployedContract)
    );

    console.log(
      "contract successfully deployed with address: ",
      contract.target
    );
  }
}
