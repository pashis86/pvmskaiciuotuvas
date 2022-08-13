const vatMultiplier = percentage => percentage / 100 + 1

export const exVatToIncVat = (percentage, exVat) => {
  return exVat * vatMultiplier(percentage)
  //return (exVat * vatMultiplier(percentage)).toFixed(0)
}

export const incVatToExtVat = (percentage, incVat) => {
  return incVat / vatMultiplier(percentage)
}
