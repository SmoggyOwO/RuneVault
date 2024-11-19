import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { WalletService } from "@/lib/wallet/walletService";
import { SolanaUtils } from "@/lib/wallet/solanaUtils";

const walletService = new WalletService(String(process.env.ENCRYPTION_KEY));
const solanaUtils = new SolanaUtils();

export async function POST(req: Request) {
  const { toAddress, amount, email } = await req.json();

  if (!email || !toAddress || !amount) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const keypair = await walletService.getKeypairFromUserId(user.id);

    const signature = await solanaUtils.sendSol(keypair, toAddress, amount);

    return NextResponse.json({ signature });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
