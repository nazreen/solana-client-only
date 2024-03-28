import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row border-b border-gray-300">
      <div className="border-b-2 border-b-black/10 pb-2 z-50 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <p className="flex w-full justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl text-white font-bold lg:static lg:w-auto  lg:rounded-xl lg:border bg-[#9945FF] lg:p-4 ">
          APU Solana Hands-on
        </p>
      </div>
      <p>an intro to @solana/web3.js</p>
    </div>
  );
};

export default Header;
