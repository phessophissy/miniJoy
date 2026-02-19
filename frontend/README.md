# miniJoy Frontend

Wood-themed React frontend for the `miniJoy` Stacks NFT project.

## Prerequisites

- Node.js 18+ and npm.
- A SIP-030 compatible wallet (Leather, Xverse) for live minting.

## Features

- Wooden visual direction with warm tones and grain textures.
- 5 contract cards (one per rare NFT contract).
- Mint studio UI with network selection and mint-intent history.
- Steps and FAQ for Hiro Sandbox mint flow.
- Wallet session panel with connect/disconnect status.

## Project structure

- `src/components` for UI sections and cards.
- `src/data/contracts.js` for the rare contract metadata.
- `src/lib/stacks.js` for wallet connect and mint calls.

## Stacks libraries used

- `@stacks/connect` for wallet connect/disconnect and `stx_callContract` requests.
- `@stacks/transactions` for post-condition generation (mint fee spend guard).

## Scripts

- `npm run dev` starts the Vite dev server.
- `npm run build` generates the production bundle.
- `npm run preview` serves the production bundle locally.
- `npm run lint` runs ESLint across the frontend.

## Wallet support

- Use Leather or another SIP-030 wallet for mainnet/testnet.
- Hiro Sandbox works for manual contract calls without wallet extensions.

## Networks

- The selector switches between mainnet, testnet, and Sandbox flows.
- Network choice is stored in `localStorage` for convenience.

## Design tokens

- Color palette and typography live in `src/index.css` as CSS variables.
- Layout and component styles live in `src/App.css`.

## Component map

- `Hero`, `StatsStrip`, `ContractsSection`, and `MintStudio` render the main flow.
- `WalletConnectPanel` and `NetworkSelector` handle wallet and network UI.

## Mint flow

1. Select a network and connect a wallet.
2. Choose a rarity contract.
3. Submit `mint` and track the transaction in the intent list.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
