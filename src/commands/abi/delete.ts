import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";
import * as fs from "fs";

const store = new Conf();

export default class DeleteAbi extends Command {
  static aliases: string[] = ["delete-abi"];

  static description =
    "Delete ABI stored in local storage by providing name ABI is stored as";

  static examples = ["<%= config.bin %> <%= command.id %> erc20ABI"];

  static args = {
    name: Args.string({
      description: "name ABI is stored as",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(DeleteAbi);

    store.delete(args.name);

    console.log(chalk.red(`ABI stored with the name ${args.name} deleted`));
  }
}
