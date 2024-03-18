# Remote Procedure Call (RPC)

## Why?

- RPC is the API to interact with the Solana.
- Use RPC to read token balances, sending transactions, reading transaction status, literally get any data that Solana has.
- The `Connection` object is a way for JavaScript to interact with your RPC.

## Function
To get balance: 
`Connection.getBalance(pubkey)` is used to request to get SOL balance of a wallet.

## References
https://solanacookbook.com/references/accounts.html#how-to-get-account-balance

https://solana-labs.github.io/solana-web3.js/classes/Connection.html
