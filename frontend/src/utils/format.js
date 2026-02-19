export function toContractId(contractAddress, contractName) {
  return `${contractAddress}.${contractName}`
}

export function formatMicroStx(value) {
  return `${Number(value).toLocaleString()} microSTX`
}

export function formatStx(value) {
  return `${value} STX`
}

export function formatStxRange(minValue, maxValue) {
  if (minValue === maxValue) {
    return `${minValue} STX`
  }
  return `${minValue} - ${maxValue} STX`
}
