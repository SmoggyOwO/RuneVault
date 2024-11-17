import { auth } from "@/lib/auth";
import prisma from "@/prisma/prisma";
import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import nacl from "tweetnacl";

const session = await auth();

async function createWallet() {
  const mnemonic = generateMnemonic();
  const seed = mnemonicToSeedSync(mnemonic);
  const path = `m/44'/501'/1'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const address = Keypair.fromSecretKey(secret).publicKey.toBase58();
  if (!session?.user?.email) {
    throw new Error("Your mom gey");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  })
  if (!user?.id) {
    throw new Error("User's mom gay")
  }
  const walletExists = await prisma.wallet.findUnique({
    where: {
      userId: user?.id
    },
  });
  if (!walletExists) {
    await prisma.wallet.create({
      data: {
        userId: user?.id,
        mnemonic: mnemonic,
        address: address,
      },
    });
  }
}

export default function () {
  createWallet();
  return (
    <div>
      <div className="text-3xl">Welcome back, {session?.user?.name}</div>
    </div>
  );
}
