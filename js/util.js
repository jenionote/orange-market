const getFormattedPrice = (price) => {
  const strPrice = '' + price;
  if (strPrice.length <= 3) return strPrice;
  return [...strPrice]
    .map((v, i) => {
      if ((strPrice.length - i) % 3 === 0 && i !== 0) return ',' + v;
      return v;
    })
    .join('');
};