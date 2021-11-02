const windowArea = (1.20 * 2.00).toFixed(2);
const doorArea = (1.90 * 0.80).toFixed(2);

export const sunTotalAreaWindowsAndDoors = (windowQuantity, doorQuantity) => {
  const result = (windowArea * windowQuantity) + (doorArea * doorQuantity);
  return result;
};
