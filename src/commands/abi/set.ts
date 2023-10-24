import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";
import * as fs from "fs";

const store = new Conf();

export default class SetAdd extends Command {
  static aliases: string[] = ["set-abi"];

  static description =
    "Read contract abi from file path provided and stores to local storage";

  static examples = [
    "<%= config.bin %> <%= command.id %> erc20ABI src/abi/erc20abi.json",
  ];

  static args = {
    name: Args.string({
      description: "name to store abi as",
      required: true,
    }),
    abiPath: Args.string({
      description: "abi file path",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(SetAdd);

    const abi = fs.readFileSync(args.abiPath, { encoding: "utf8" });

    store.set(args.name, abi);
    console.log(`${chalk.green.bold(args.name)} ABI successully stored✅`);
  }
}
