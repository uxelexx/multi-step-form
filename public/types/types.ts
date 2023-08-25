// Plan types

export type PlanPrices = {
  Arcade: number;
  Advanced: number;
  Pro: number;
};

export type Plans = PlanPrices & {
  type: keyof PlanPrices;
};
