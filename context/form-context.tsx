'use client';

import { ADDS_PRICE, PLAN_PRICE } from '@/helpers/prices';
import { ReactNode, createContext, useContext, useState } from 'react';

//TODO: Refactor to RTK

type Plan = keyof typeof PLAN_PRICE;

type AddsService = {
  included: boolean;
  price: number;
};

type AddOns = {
  [Key in keyof typeof ADDS_PRICE]: AddsService;
};

type PersonalInfo = {
  userName: string;
  userEmail: string;
  userPhone: string;
};

export type FormStateType = {
  formIndex: number;
  done: boolean;
  yearly: boolean;
  formSteps: string[];
  personal: PersonalInfo;
  plan: Plan;
  addOns: AddOns;
};

const initialState: FormStateType = {
  formIndex: 1, // TODO: change to 0 later
  yearly: false,
  done: false,
  formSteps: ['Your info', 'Select plan', 'Add-ons', 'Summary'],
  personal: {
    userName: '',
    userEmail: '',
    userPhone: '',
  },
  plan: 'Arcade',
  addOns: {
    service: { included: false, price: ADDS_PRICE.service },
    storage: { included: false, price: ADDS_PRICE.storage },
    profile: { included: false, price: ADDS_PRICE.profile },
  },
};

const FormContext = createContext({
  form: initialState,
  setForm: (
    form: FormStateType | ((form: FormStateType) => FormStateType),
  ) => {},
});

export function FormProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState(initialState);

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
