import { Args, Command, Flags } from "@oclif/core";
import { InterfaceAbi, JsonRpcProvider, Provider, ethers } from "ethers";
import Conf from "conf";
import * as repl from "repl";
import * as chalk from "chalk";

import { providerNetworkFlags } from "../../utils/network";
import { getProvider } from "../../utils/provider";

const store = new Conf();

export default class ContractIndex extends Command {
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
      description: "private key of transaction signer",
    }),
  };

  static args = {
    address: Args.string({ description: "contract address", required: true }),
    abi: Args.string({
      description: "name of abi saved using `peek set-abi`",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ContractIndex);

    if (!ethers.isAddress(args.address)) {
      throw new Error("Invalid contract address");
    }
    if (!store.has(args.abi)) {
      throw new Error(`${chalk.bold.underline(args.abi)} does not exist!`);
    }

    const abi = store.get(args.abi) as InterfaceAbi;
    const provider = getProvider(flags);

    let contract;

    if (flags.private_key) {
      const wallet = new ethers.Wallet(flags.private_key).connect(provider);

      contract = new ethers.Contract(args.address, abi, wallet);
    } else {
      contract = new ethers.Contract(args.address, abi, provider);
    }

    repl.start().context.contract = contract;
  }
}
