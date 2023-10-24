import { Args, Command } from "@oclif/core";
import { getProvider } from "../../utils/provider";
import { Provider, Block } from "ethers";
import * as chalk from "chalk";
import { providerNetworkFlags } from "../../utils/network";

export default class BlockIndex extends Command {
  static description =
    "get transaction details and hash of block. If block is not provider, details of latest block is returned";

  static examples = [
    "<%= config.bin %> <%= command.id %> 4474398 --sepolia",
    "<%= config.bin %> <%= command.id %> 4474398 --rpc_url=[PROVIDER_URL]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    block_number: Args.string({ description: "block number" }),
  };

  public static enableJsonFlag = true;

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(BlockIndex);

    let provider: Provider = getProvider(flags);

    let blockNumber: number;

    if (args.block_number !== undefined) {
      blockNumber = Number(args.block_number);
    } else {
      blockNumber = await provider.getBlockNumber();
    }

    const block: Block | null = await provider.getBlock(blockNumber);

    console.log(block);
  }
}
