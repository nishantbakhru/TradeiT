import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Anchortradeit } from '../target/types/anchortradeit';
import { Transaction, Ed25519Program, Keypair, PublicKey, SystemProgram, LAMPORTS_PER_SOL, SYSVAR_INSTRUCTIONS_PUBKEY, sendAndConfirmTransaction } from "@solana/web3.js";
import { randomBytes } from "crypto"
import { BN } from "bn.js";


describe('basic', () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Basic as Program<Anchortradeit>;

  const MSG = Uint8Array.from(Buffer.from("1337", "hex"));
  let house = new Keypair();
  let player = new Keypair();
  let seed = new BN(randomBytes(16));
  let vault = PublicKey.findProgramAddressSync([Buffer.from("vault"), house.publicKey.toBuffer()], program.programId)[0];
  let bet = PublicKey.findProgramAddressSync([Buffer.from("bet"), vault.toBuffer(), seed.toBuffer("le", 16)], program.programId)[0];
  let signature: Uint8Array;

  it("Airdrop", async () => {
    await Promise.all([house, player].map(async (k) => {
      return await anchor.getProvider().connection.requestAirdrop(k.publicKey, 1000 * anchor.web3.LAMPORTS_PER_SOL).then(confirmTx)
    }));
  });

  it('should run the program', async () => {
    // Add your test here.
    
    let signature = await program.methods.create_tournament(new BN(LAMPORTS_PER_SOL).mul(new BN(100)))
    .accounts({
      house: house.publicKey,
      vault,
      systemProgram:SystemProgram.programId 
    })
    .signers([
      house
    ])
    .rpc().then(confirmTx);
  });
  });
});
