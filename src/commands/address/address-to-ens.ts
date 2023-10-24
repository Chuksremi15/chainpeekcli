import { Args, Command } from "@oclif/core";
import { ethers } from "ethers";
import { providerNetworkFlags } from "../../utils/network";
import { getProvider } from "../../utils/provider";

export default class AddressToEns extends Command {
  static description =
    "Performs a reverse lookup of the address in ENS using the Reverse Registrar. If the name does not exist, or the forward lookup does not match, null is returned";

  static examples = [
    "<%= config.bin %> <%= command.id %>  0x34aA3F359A9D614239015126635CE7732c18fDF3 --mainnet",
    "<%= config.bin %> <%= command.id %>  0x34aA3F359A9D614239015126635CE7732c18fDF3 --rpc_url=[PROVIDER_URL]",
  ];

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
    const { args, flags } = await this.parse(AddressToEns);

    if (!ethers.isAddress(args.address)) {
      return this.error("Invalid address");
    }

    let provider = getProvider(flags);

    const ensname: string | null = await provider.lookupAddress(args.address);

    if (args.address) {
      this.log(`ens: `, `${ensname}`);
    } else {
      this.error(`command requires an address`);
    }
  }
}
