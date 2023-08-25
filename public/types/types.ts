// Form types
export type FormSteps = "Your info" | "Select plan" | "Add-ons" | "Summary";

export type FormInfo = {
  index: number;
  done: boolean;
  yearly: boolean;
  formSteps: FormSteps[];
};

// Plan types
export type PlanPrices = {
  Arcade: number;
  Advanced: number;
  Pro: number;
};

export type Plans = PlanPrices & {
  type: keyof PlanPrices;
};
