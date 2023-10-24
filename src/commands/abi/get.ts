import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";
import * as fs from "fs";

const store = new Conf();

export default class SetAbi extends Command {
  static aliases: string[] = ["get-abi"];

  static description =
    "Get ABI stored in local storage by providing name ABI is stored as";

  static examples = ["<%= config.bin %> <%= command.id %> erc20ABI"];

  static args = {
    name: Args.string({
      description: "name ABI is stored as",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(SetAbi);

    const storedABI = store.get(args.name);

    console.log(`ABI stored with the name ${args.name} :`, storedABI);
  }
}
