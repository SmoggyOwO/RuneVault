import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { create } from "zustand";

const calcSeed = (mnemonic, index) => {
  const seed = mnemonicToSeedSync(mnemonic);
  const path = `m/44'/501'/${index}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  return Keypair.fromSecretKey(secret).publicKey.toBase58(); // Return the generated public key
};

const useGetMnemonic = create((set) => ({
  mnemonic: "",
  seeds: [],
  index: 0, // Initialize index to 0
  generateMnemonic: () => set(() => ({ mnemonic: generateMnemonic(), index: 0 })), // Reset index when a new mnemonic is generated
  generateSeed: () => 
    set((state) => {
      const newPublicKey = calcSeed(state.mnemonic, state.index); // Generate a new public key
      return { 
        seeds: [...state.seeds, newPublicKey], // Append new public key to seeds
        index: state.index + 1 // Increment the index for the next seed generation
      };
    }),
  updateMnemonic: (newMnemonic) => set({ mnemonic: newMnemonic }),
}));

export default useGetMnemonic;
