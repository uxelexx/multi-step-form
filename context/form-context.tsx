'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type FormStateType = {
  formIndex: number;
  personal: {
    userName: string;
    userEmail: string;
    userPhone: string;
  };
  plan: {
    yearly: boolean;
    type: string;
  };
  addOns: {
    onlineService: boolean;
    largeStorage: boolean;
    customizableProfile: boolean;
  };
};

const FORM_STATE: FormStateType = {
  formIndex: 2,
  personal: {
    userName: '',
    userEmail: '',
    userPhone: '',
  },
  plan: {
    yearly: false,
    type: 'Arcade',
  },
  addOns: {
    onlineService: false,
    largeStorage: false,
    customizableProfile: false,
  },
};

const FormContext = createContext({
  form: FORM_STATE,
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE),
  ) => {},
});

export function FormProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState(FORM_STATE);

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
