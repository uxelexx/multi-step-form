export function formatPrice(yearly: boolean, price: number) {
  return yearly ? `$${price * 10}/yr` : `$${price}/mo`;
}
