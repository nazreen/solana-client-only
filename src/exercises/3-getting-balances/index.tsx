import Wallet from "@/components/Wallet";
import { Keypair, Connection } from "@solana/web3.js";
import React, { useEffect, useState } from "react";

export const task = "Lesson 3 - Get your wallet balance.";

const Exercise3GettingBalance: React.FC<{
  keypair: Keypair | null;
  connection: Connection;
}> = ({ keypair, connection }) => {
  const [balance, setBalance] = useState<string>("0");
  useEffect(() => {
    const fetchSOLBalance = async () => {
      if (!keypair?.publicKey) return;

      try {
        /** Exercise 3, use the connection object to fetch the account's balance */

        /** End of exercise 3 */
      } catch (error) {
        console.error(error);
      }
    };

    fetchSOLBalance();
    const intervalId = setInterval(fetchSOLBalance, 2_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [connection, keypair]);

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Balance</p>
        <div className="mt-4">{balance} SOL</div>
      </div>
    </>
  );
};

export default Exercise3GettingBalance;
