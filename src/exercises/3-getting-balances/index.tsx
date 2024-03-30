import Wallet from "@/components/Wallet";
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect, useState } from "react";

import Guide from "@/components/Guide";

const taskNumber = 3;

export const task = "Lesson 3 - Get your wallet balance.";

const Exercise3GettingBalance: React.FC<{
  keypair: Keypair | null;
  connection: Connection;
}> = ({ keypair, connection }) => {
  const [loading, setLoading] = useState(true);
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

    fetchSOLBalance(); // run once initially
    const intervalId = setInterval(fetchSOLBalance, 5_000);

    return () => {
      clearInterval(intervalId);
    };
  }, [connection, keypair]);

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Balance</p>
        <div className="mt-4">{loading ? "(loading)" : balance} SOL</div>
      </div>
      <Guide taskNumber={taskNumber} />
    </>
  );
};

export default Exercise3GettingBalance;

// const latestBalance = await connection.getBalance(keypair?.publicKey);
// setBalance((latestBalance / LAMPORTS_PER_SOL).toFixed(6));
// setLoading(false);