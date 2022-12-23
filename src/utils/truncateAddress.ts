export const truncateAddress = (address: string): string =>
  address.slice(0, 9) +
  "..." +
  address.slice(address.length - 9, address.length);
