# RPC through websocket

## Why?

- Get events realtime from Solana.
- Also using the Connection object, it establish a websocket connection to the RPC.

## Function
`Connection.onRootChange(callback)` is used to get slot changes from RPC.

`Connection.onSignature(signature, callback)` is used to get the status of a transaction.


# Concepts

- Commitment (processed, confirmed, confirmed)
- transactiond id (transaction signature)

## Ref
https://solanacookbook.com/references/local-development.html#subscribing-to-events

https://solana-labs.github.io/solana-web3.js/classes/Connection.html#onRootChange

https://solana-labs.github.io/solana-web3.js/classes/Connection.html#onSignature
