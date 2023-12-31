import { Args, Command } from "@oclif/core";
import { InterfaceAbi, Provider, ethers } from "ethers";
import Conf from "conf";
import * as repl from "repl";
import * as chalk from "chalk";

import { providerNetworkFlags } from "../../utils/network";
import { getProvider } from "../../utils/provider";

const store = new Conf();
export default class EventsWatch extends Command {
  static aliases: string[] = ["events-watch"];

  static description = "emits new events from contract";

  static examples = [
    "<%= config.bin %> <%= command.id %> 0xF51CD0d607c82db2B7EB670554C82C276A9549B4 erc20ABI Transfer --mainnet",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    address: Args.string({ description: "contract address", required: true }),
    abi: Args.string({
      description: "name of abi saved using `peek set-abi`",
      required: true,
    }),
    event: Args.string({
      description: "event to watch",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(EventsWatch);

    let provider: Provider = getProvider(flags);

    if (!ethers.isAddress(args.address)) {
      throw new Error("Invalid contract address");
    }
    if (!store.has(args.abi)) {
      throw new Error(`${chalk.bold.underline(args.abi)} does not exist!`);
    }
    const abi = store.get(args.abi) as InterfaceAbi;
    const contract = new ethers.Contract(args.address, abi, provider);

    console.log(chalk.green(`Listening for ${args.event} events...`));
    contract.on(args.event, (from, to, event) => {
      console.log({
        from,
        to,
        event,
      });
    });
  }
}
