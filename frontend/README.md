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
