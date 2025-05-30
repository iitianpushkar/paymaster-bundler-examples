## Getting Started

This example uses viem and viem's Account Abstraction extension [viem-aa](https://viem.sh/account-abstraction) to create a [ERC-4337](https://www.erc4337.io/) smart contract account and send a sponsored transaction.

We'll be minting a NFT on Base Sepolia using Coinbase Developer Platform's Paymaster & Bundler.

### 1. Setup

Ensure you have the `rpc_url` and `private_key` variables set in the `config.json`.

### 2. Install dependencies

```
yarn
```

### 3. Run the example

```
yarn dev
```

### 4. See your sponsored transaction live!

You should receive an Etherscan link with your sponsored transaction in the terminal output. [Example](https://sepolia.basescan.org/tx/0xe51e9bf6fea0dfecfcbf7168bcc7da2c833ad0dcac5651940953a89857674885)

```
 ✅ Transaction successfully sponsored!"
 ⛽ Successfully sponsored gas for mintTo transaction with Coinbase Developer Platform!
 🔍 View on Etherscan: https://sepolia.basescan.org/tx/0xe51e9bf6fea0dfecfcbf7168bcc7da2c833ad0dcac5651940953a89857674885
✨  Done in 5.66s.
```
