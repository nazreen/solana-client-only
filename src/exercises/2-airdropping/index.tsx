import Wallet from "@/components/Wallet";
import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState } from "react";

export const task = "Lesson 2 - Airdrop. Fund your wallet.";

const Exercise2Airdropping: React.FC<{
  keypair: Keypair | null;
  connection: Connection;
}> = ({ keypair, connection }) => {
  const [airdropped, setAirdropped] = useState<boolean>(false);
  const [airdropping, setAirdropping] = useState<boolean>(false);

  const onClickAirdrop = async () => {
    if (!keypair?.publicKey) return;

    setAirdropping(true);
    setAirdropped(true);

    try {
      /** Exercise 2, use the connection object to request an airdrop to your Keypair */

      /** End of exercise 2 */

      if ("err" in result) {
        console.error(result.err);
        throw new Error("Failed to airdrop");
      }
    } catch (error) {
      // ignore
    } finally {
      setAirdropping(false);
    }
  };

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Airdop</p>
        <div className="mt-4">
          {(() => {
            if (airdropping) {
              return (
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed opacity-50 text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
                >
                  Airdropping...
                </button>
              );
            }

            if (airdropped) {
              return (
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed opacity-50 text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
                >
                  Already Airdropped
                </button>
              );
            }

            return (
              <button
                type="button"
                onClick={onClickAirdrop}
                className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
              >
                Click to Airdrop
              </button>
            );
          })()}
        </div>
      </div>
    </>
  );
};

export default Exercise2Airdropping;


// const signature = await connection.requestAirdrop(keypair?.publicKey, 1 * LAMPORTS_PER_SOL);
// const latestBlockchash = await connection.getLatestBlockhash();

// const result = await connection.confirmTransaction({
//   blockhash: latestBlockchash.blockhash,
//   lastValidBlockHeight: latestBlockchash.lastValidBlockHeight,
//   signature: signature,
// });