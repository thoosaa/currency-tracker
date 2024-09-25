export const convert = (fromQuote: string, toQuote: string) => {
  const fromQuoteValue = parseFloat(localStorage.getItem(fromQuote) ?? "");
  const toQuoteValue = parseFloat(localStorage.getItem(toQuote) ?? "");

  const res = toQuoteValue / fromQuoteValue;

  return res;
};
