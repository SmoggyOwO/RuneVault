import { SolanaUtils } from "@/lib/wallet/solanaUtils";
import { WalletService } from "@/lib/wallet/walletService";
import prisma from "@/prisma/prisma";
import { error } from "console";
import { NextResponse } from "next/server";

const walletService = new WalletService(String(process.env.ENCRYPTION_KEY));
const solanaUtils = new SolanaUtils();

export async function POST(req: Request) {
  const { email } = await req.json();
  try {
    if (!email) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const publicKey = await walletService.getAddressFromUserId(user.id);
    const balance = await solanaUtils.getBalance(publicKey.toString());
    return NextResponse.json(
      {
        balance: Number(balance),
        publicKey: publicKey.toString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
