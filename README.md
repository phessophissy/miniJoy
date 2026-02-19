# miniJoy

miniJoy is a Stacks (Bitcoin L2) NFT project forked from `miniNFT` and redesigned for Clarity.

## What Changed

- Migrated from Base/EVM Solidity to Stacks/Clarity.
- Split the 5 rare NFTs into 5 separate smart contracts.
- Added per-contract mint fee in STX between `0.0001` and `0.001 STX`.
- Project renamed to `miniJoy`.
- uses @stacks/connect and @stacks/transactions

## Prerequisites

- Node.js 18+ for running the workspace scripts.
- Clarinet installed locally for contract checks and deployments.

## Contracts

Each contract deploys to its own contract address (for example: `SP... .mini-joy-rare-1`).
Contract IDs follow the format `ADDRESS.contract-name` and map 1:1 with each rarity.

| Contract | Fee (microSTX) | Fee (STX) | Supply |
|---|---:|---:|---:|
| `mini-joy-rare-1` | `100` | `0.0001` | `1` |
| `mini-joy-rare-2` | `250` | `0.00025` | `1` |
| `mini-joy-rare-3` | `500` | `0.0005` | `1` |
| `mini-joy-rare-4` | `750` | `0.00075` | `1` |
| `mini-joy-rare-5` | `1000` | `0.001` | `1` |

Notes:
- `1 STX = 1,000,000 microSTX`.
- The minimum mint fee in this range is `100 microSTX` (`0.0001 STX`).
- Each contract enforces its mint fee on-chain.

## Deployer Wallet

Mainnet deployment sender is set to:
- `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09`

Expected mainnet contract IDs:
- `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09.sip009-nft-trait2`
- `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09.mini-joy-rare-1`
- `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09.mini-joy-rare-2`
- `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09.mini-joy-rare-3`
- `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09.mini-joy-rare-4`
- `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09.mini-joy-rare-5`

## Project Structure

```text
contracts/
  sip009-nft-trait2.clar
  mini-joy-rare-1.clar
  mini-joy-rare-2.clar
  mini-joy-rare-3.clar
  mini-joy-rare-4.clar
  mini-joy-rare-5.clar
settings/
  Simnet.toml.example
  Devnet.toml.example
  Testnet.toml.example
  Mainnet.toml.example
Clarinet.toml
```

## Quick Start

```bash
npm install
npm run check
```

## Local Checks

```bash
npm run check
```

## Troubleshooting

- If `clarinet` is missing, confirm it is in your PATH.
- If checks fail after edits, rerun `npm run settings:init`.

## Frontend

```bash
npm run frontend:install
npm run frontend:dev
```

Frontend notes:
- Network selection persists locally in `localStorage`.
- The UI expects wallet support for SIP-030 connections.

Frontend wallet and transaction stack:
- `@stacks/connect` for wallet connection and contract calls.
- `@stacks/transactions` for Clarity/post-condition construction.

## Networks

- `mainnet`: use the production contract IDs listed above.
- `testnet`: deploy using the Testnet plan in `deployments/`.
- `sandbox`: use Hiro Sandbox and the contract ID from the UI cards.

## Deploy to Mainnet

1. Run `npm run settings:init` to create local `settings/*.toml` files from templates.
2. Replace mnemonic in `settings/Mainnet.toml` with the seed phrase for `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09`.
3. Generate deployment plan:

```bash
npm run deploy:generate
```

4. Apply deployment:

```bash
npm run deploy
```

## Contract Interface

Each `mini-joy-rare-*` contract includes:
- `mint()` to mint and pay the configured STX fee.
- `transfer(token-id, sender, recipient)` for SIP-009 transfer compatibility.
- `get-last-token-id()`, `get-token-uri(token-id)`, `get-owner(token-id)`.
- `get-mint-fee()` and `get-rarity-label()` convenience readers.
