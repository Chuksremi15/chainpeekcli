import { Command } from "@oclif/core";
import { getProvider } from "../../utils/provider";
import { Provider } from "ethers";
import * as chalk from "chalk";
import { providerNetworkFlags } from "../../utils/network";

export default class BlockNumber extends Command {
  static aliases: string[] = ["block-number"];
  static description =
    "Returns the block number of the most recently mined block. Default network: localhost";

  static examples = [
    "<%= config.bin %> <%= command.id %> --mainnet",
    "<%= config.bin %> <%= command.id %> --rpc_url=[PROVIDER_URL]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(BlockNumber);

    let provider: Provider = getProvider(flags);

    const blockNumber = await provider.getBlockNumber();
    this.log(`${chalk.blue.underline.bold(`${blockNumber}`)}`);
  }
}
