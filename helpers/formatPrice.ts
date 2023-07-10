export function formatPrice(yearly: boolean, price: number | string) {
  if (Number.isNaN(Number(price))) throw Error('wrong price format');

  return yearly ? `$${Number(price) * 10}/yr` : `$${Number(price)}/mo`;
}
