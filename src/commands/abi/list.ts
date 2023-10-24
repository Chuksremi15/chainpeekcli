import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";

const store = new Conf();

export default class AbiList extends Command {
  static aliases: string[] = ["list-abi"];

  static description = "list the name of all stored ABIs";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const _store = store.store;
    const abis = Object.keys(_store);

    if (abis.length === 0) {
      return console.log("ABI stored is empty");
    }
    console.log(`Total: ${chalk.bold.underline(store.size)}`);
    abis.forEach((abi) => {
      console.log(`- ${abi}`);
    });
  }
}
