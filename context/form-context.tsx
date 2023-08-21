'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type FormStateType = {
  formIndex: number;
  done: boolean;
  formSteps: string[];
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
  formIndex: 0,
  done: false,
  formSteps: ['Your info', 'Select plan', 'Add-ons', 'Summary'],
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
  toggleYearly: () => {},
  nextStep: () => {},
  prevStep: () => {},
  confirm: () => {},
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE),
  ) => {},
});

export function FormProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState(FORM_STATE);
  const lastPage = form.formIndex >= 3;

  function toggleYearly() {
    setForm(prev => ({
      ...prev,
      plan: {
        ...prev.plan,
        yearly: !prev.plan.yearly,
      },
    }));
  }

  function nextStep() {
    if (lastPage) return;

    setForm(prev => ({
      ...prev,
      formIndex: ++prev.formIndex,
    }));
  }

  function prevStep() {
    if (form.formIndex <= 0) return;

    setForm(prev => ({
      ...prev,
      formIndex: --prev.formIndex,
    }));
  }

  function confirm() {
    if (!lastPage) return;

    setForm(prev => ({
      ...prev,
      done: true,
    }));

    console.log(form.personal);
  }

  return (
    <FormContext.Provider
      value={{ form, setForm, toggleYearly, prevStep, nextStep, confirm }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
