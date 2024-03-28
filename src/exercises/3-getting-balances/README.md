# Remote Procedure Call (RPC)

## Why?

- RPC is the API to interact with the Solana cluster
- read and write operations. e.g. read token balances, sending transactions, reading transaction status, send tokens
- The `Connection` object is a way for JavaScript to interact with your RPC.

## Function
To get balance: 
`Connection.getBalance(pubkey)` is used to request to get SOL balance of a wallet.

# Concepts

- RPC
- Connection (see `src/pages/index.tsx`)

## References
https://solanacookbook.com/references/accounts.html#how-to-get-account-balance

https://solana-labs.github.io/solana-web3.js/classes/Connection.html
