export function toContractId(contractAddress, contractName) {
  return `${contractAddress}.${contractName}`
}

export function formatMicroStx(value) {
  return `${Number(value).toLocaleString()} microSTX`
}

export function formatStx(value) {
  return `${value} STX`
}

export function formatAddress(address) {
  if (!address) return ''
  if (address.length <= 12) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
