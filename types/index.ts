// Form types
export type FormSteps = "Your info" | "Select plan" | "Add-ons" | "Summary";

export type FormInfo = {
  index: number;
  done: boolean;
  yearly: boolean;
  formSteps: FormSteps[];
};

// Personal info types
export type PersonalInfoField = "userName" | "userEmail" | "userPhone";
export type PersonalInfo = Record<PersonalInfoField, string>;

export type PayloadActionType = {
  name: PersonalInfoField;
  value: string;
};

// Plan types
export type PlanType = "Arcade" | "Advanced" | "Pro";
export type PlanPrices = Record<PlanType, number>;
export type Plans = PlanPrices & {
  type: PlanType;
};

// Addons types
export type AddonType = "service" | "storage" | "profile";

type Addon = {
  label: string;
  description: string;
  price: number;
  included: boolean;
};

export type Addons = Record<AddonType, Addon>;
