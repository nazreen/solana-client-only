import Wallet from "@/components/Wallet";
import { Connection, Keypair } from "@solana/web3.js";
import React, { useEffect, useState } from "react";

export const task = "Lesson 4 - Understanding websocket";

const Exercise4ReadingRealtimeBlocks: React.FC<{
  connection: Connection;
  keypair: Keypair | null;
}> = ({ connection, keypair }) => {
  const [currentBlock, setCurrentBlock] = useState<number>(0);

  useEffect(() => {
    /** Exercise 4: Use the websocket listener from the connection object to fetch the latest block */
    const id = connection.onRootChange(setCurrentBlock);
    return () => {
      connection.removeRootChangeListener(id);
    };
    /** End of exercise 4 */
  }, [connection]);

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Current block</p>
        <div className="mt-4">{currentBlock}</div>
      </div>
    </>
  );
};

export default Exercise4ReadingRealtimeBlocks;
