import { Addons } from "@/types";

export function countTotalPrice(planPrice: number, addons: Addons) {
  return (
    Object.values(addons).reduce((acc, value) => {
      return value.included ? acc + value.price : acc;
    }, 0) + planPrice
  );
}
