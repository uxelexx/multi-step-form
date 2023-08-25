// Form types
export type FormSteps = "Your info" | "Select plan" | "Add-ons" | "Summary";

export type FormInfo = {
  index: number;
  done: boolean;
  yearly: boolean;
  formSteps: FormSteps[];
};

//Personal info types
export type PersonalInfo = {
  userName: string;
  userEmail: string;
  userPhone: string;
};

export type PersonalInfoField = keyof PersonalInfo;

export type PayloadActionType = {
  name: PersonalInfoField;
  value: string;
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
