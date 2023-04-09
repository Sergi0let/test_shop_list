export const createDescription = (description: string) =>
  `${description.slice(0, 240)}...`;

export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const showOrderMessage = (totalPrice: string) => {
  const message = `Thank you for your order! Your order price is ${totalPrice} $`;
  alert(message);
};
