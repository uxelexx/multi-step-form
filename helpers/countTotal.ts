import { Addons } from "@/types";

export function countTotalPrice(plan: number, addons: Addons) {
  return (
    Object.values(addons).reduce((acc, value) => {
      return value.included ? acc + value.price : acc;
    }, 0) + plan
  );
}
