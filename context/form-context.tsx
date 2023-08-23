'use client';

import { ADDS, PLANS } from '@/helpers/prices';
import { ReactNode, createContext, useContext, useState } from 'react';

//TODO: Refactor to RTK

type Plan = keyof typeof PLANS;

type AddsService = {
  included: boolean;
  price: number;
};

type AddOns = {
  [Key in keyof typeof ADDS]: AddsService;
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
    service: { included: false, price: ADDS.service.price },
    storage: { included: false, price: ADDS.storage.price },
    profile: { included: false, price: ADDS.profile.price },
  },
};

const FormContext = createContext({
  form: initialState,
  lastPage: false,
  setForm: (
    form: FormStateType | ((form: FormStateType) => FormStateType),
  ) => {},
});

export function FormProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState(initialState);
  const lastPage = form.formIndex >= form.formSteps.length - 1;

  return (
    <FormContext.Provider value={{ lastPage, form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
