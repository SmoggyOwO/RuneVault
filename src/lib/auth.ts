import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/prisma";
import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60,
    strategy: "jwt"
  },

  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const mnemonic = generateMnemonic();
      const seed = mnemonicToSeedSync(mnemonic);
      const path = `m/44'/501'/1'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const address = Keypair.fromSecretKey(secret).publicKey.toBase58();
      if (user) {
        const walletexists = await prisma.wallet.findUnique({
          where: {
            userId: user.id
          }
        })
        if (!walletexists) {
          await prisma.wallet.update({
            where: {
              userId: user?.id,
            },
            data: {
              address: address,
              mnemonic: mnemonic,
            },
          });
        }
      }
      return true;
    }
  },
});
