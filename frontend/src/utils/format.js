export function toContractId(contractAddress, contractName) {
  return `${contractAddress}.${contractName}`
}

export function formatMicroStx(value) {
  const formatter = new Intl.NumberFormat('en-US')
  return `${formatter.format(Number(value))} microSTX`
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
