import Wallet from "@/components/Wallet";
import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import React, { useState } from "react";

export const task = "Lesson 5 - Create a transaction to send SOL";

const Exercise5SendingTokens: React.FC<{
  keypair: Keypair | null;
  connection: Connection;
}> = ({ keypair, connection }) => {
  const [txid, setTxid] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [amountToTransfer, setAmountToTransfer] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);

  const onClickTransfer = async () => {
    if (!keypair?.publicKey) return;

    /** Exercise 5.1: To verify if the PublicKey is valid */

    /** End of exercise 5.1 section */

    setIsSending(true);


    try {
    /** Exercise 5.2: To Craft a Transaction that sends SOL to the recipient
     * craft a TransactionInstruction
     * craft a TransactionMessage
     * craft a VersionedTransaction
     * Finally, send the transaction
     * */
      

      /** End of exercise 5.2 section */
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {keypair && <Wallet keypair={keypair} />}
      <div className="mt-6">
        <p className="font-semibold">Transfer SOL</p>
        <div className="mt-4">
          Recipient:{" "}
          <input
            value={recipient}
            className="text-black rounded-lg border border-black/10 px-2 py-1 w-full max-w-[480px]"
            onChange={(e) => {
              setRecipient(e.target.value);
            }}
          />
        </div>
        <div className="mt-4">
          Amount to transfer:{" "}
          <input
            className="text-black rounded-lg border border-black/10 px-2 py-1"
            value={amountToTransfer}
            onChange={(e) => {
              setAmountToTransfer(e.target.valueAsNumber);
            }}
            type="number"
          />
        </div>

        {isSending ? (
          <button
            type="button"
            disabled
            className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white mt-4 cursor-not-allowed opacity-50"
          >
            Sending...
          </button>
        ) : (
          <button
            type="button"
            onClick={onClickTransfer}
            className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white mt-4"
          >
            Transfer
          </button>
        )}
      </div>

      <div className="mt-6">
        <p className="font-semibold">Transaction ID:</p>
        <div className="mt-4 text-xs">{txid}</div>

        <div className="flex mt-4">
          {txid ? (
            <a
              href={`https://explorer.solana.com/tx/${txid}?cluster=devnet`}
              target="_blank"
              className="text-black backdrop-blur-2xl rounded-xl px-4 py-2 bg-white"
            >
              Open Explorer
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Exercise5SendingTokens;