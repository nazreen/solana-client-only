# Create and Send Transaction

## Why?

- To write data to the blockchain
- Example: send Solana to someone else, sending NFT, interact with Solana apps.

## Function

`SystemProgram.transfer({ fromPubkey: PublicKey; lamports: number | bigint; toPubkey: PublicKey; })`returns an instruction.
`Connection.sendTransaction(transaction, signers)` is used to send transaction

# Concepts

- System Program
- Instruction, TransactionMessage, VersionedTransaction
- Signing


## Ref
https://solanacookbook.com/references/basic-transactions.html#how-to-send-sol
https://solana.com/docs/core/transactions/versions#how-create-a-versioned-transaction
https://solana-labs.github.io/solana-web3.js/classes/Connection.html#sendTransaction
https://solana-labs.github.io/solana-web3.js/classes/SystemProgram.html