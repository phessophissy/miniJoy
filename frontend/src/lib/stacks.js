import { connect, disconnect, getLocalStorage, isConnected, request } from '@stacks/connect'
import { Pc } from '@stacks/transactions'

function mapNetwork(network) {
  if (network === 'mainnet') return 'mainnet'
  if (network === 'testnet') return 'testnet'
  return 'devnet'
}

export function getWalletState() {
  const storage = getLocalStorage()
  const address = storage?.addresses?.stx?.[0]?.address ?? ''
  return {
    connected: isConnected() && Boolean(address),
    address,
  }
}

export async function connectWallet(network) {
  await connect({
    forceWalletSelect: true,
    network: mapNetwork(network),
  })
  return getWalletState()
}

export function disconnectWallet() {
  disconnect()
  return {
    connected: false,
    address: '',
  }
}

export async function callMint({ contractAddress, contractName, feeMicroStx, network, senderAddress }) {
  const contract = `${contractAddress}.${contractName}`
  const spendGuard = Pc.principal(senderAddress).willSendLte(feeMicroStx).ustx()

  const result = await request('stx_callContract', {
    contract,
    functionName: 'mint',
    functionArgs: [],
    network: mapNetwork(network),
    postConditionMode: 'deny',
    postConditions: [spendGuard],
  })

  return result?.txid ?? ''
}
