import { Args, Command, Flags } from "@oclif/core";
import { ethers, BigNumberish, Provider } from "ethers";
import { ALCHEMY_KEY } from "../../utils/constants";
import { providerNetworkFlags } from "../../utils/network";
import { getProvider } from "../../utils/provider";

export default class AddressBalance extends Command {
  static description = "Get address balance";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    address: Args.string({
      description: "wallet address or contract address",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddressBalance);

    if (!ethers.isAddress(args.address)) {
      return this.error("Invalid address");
    }

    let provider = getProvider(flags);

    const balance: BigNumberish = await provider.getBalance(args.address);

    if (args.address) {
      this.log(`you balance is: ${balance}`);
    } else {
      this.error(`command requires an address`);
    }
  }
}
