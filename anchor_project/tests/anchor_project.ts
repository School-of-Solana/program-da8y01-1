import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorProject } from "../target/types/anchor_project";
const { SystemProgram } = anchor.web3;
import { assert } from "chai";

describe("anchor_project", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.anchorProject as Program<AnchorProject>;
  const auctionAccount = anchor.web3.Keypair.generate();

  it("Initializes the auction", async () => {
    await program.rpc.initialize(new anchor.BN(100), {
      accounts: {
        auction: auctionAccount.publicKey,
        owner: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      },
      signers: [auctionAccount]
    });

    const account = await program.account.auction.fetch(auctionAccount.publicKey);
    console.log('Auction initialized with highest bid: ', account.highestBid.toString());
    // The highest bid should be 100 after initialization.
    assert.ok(account.highestBid.toString() === '100');
  });
});
