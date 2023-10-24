import { Args, Command, Flags } from "@oclif/core";
import { ethers, BigNumberish, Provider } from "ethers";
import { ALCHEMY_KEY } from "../../utils/constants";
import { providerNetworkFlags } from "../../utils/network";
import { getProvider } from "../../utils/provider";

export default class Ens_To_Address extends Command {
  static description =
    "Looks up the address of name. If the name is not owned, or does not have a Resolver configured, or the Resolver does not have an address configured, null is returned.";

  static examples = [
    "<%= config.bin %> <%= command.id %> atg.eth --mainnet",
    "<%= config.bin %> <%= command.id %> atg.eth --rpc_url=[PROVIDER_URL]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    ens: Args.string({
      description: "An existing ens",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Ens_To_Address);

    if (!args.ens) {
      return this.error("provide an ens");
    }

    let provider = getProvider(flags);

    const ensaddress: string | null = await provider.resolveName(args.ens);

    if (args.ens) {
      this.log(`ens address: `, `${ensaddress}`);
    } else {
      this.error(`command requires an address`);
    }
  }
}
