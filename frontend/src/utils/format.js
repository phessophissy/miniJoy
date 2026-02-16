export function toContractId(contractAddress, contractName) {
  return `${contractAddress}.${contractName}`
}

export function formatMicroStx(value) {
  return `${Number(value).toLocaleString()} microSTX`
}

export function formatStx(value) {
  return `${value} STX`
}
