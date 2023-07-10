'use client';

import { useForm } from '@/context/form-context';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import AllForms, { FormIndex } from './AllForms';

export default function Main() {
  const { form, setForm } = useForm();

  function nextStep() {
    if (form.formIndex >= 3) return;

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

  return (
    <section className='flex content-center rounded-xl w-[min(59rem,90vw)] h-[37rem] bg-white p-4'>
      <Sidebar />
      <div className='flex flex-col flex-1 pl-24 pr-20 pt-10 pb-5'>
        <AllForms index={form.formIndex as FormIndex} />
        <div
          className={`${
            form.formIndex === 0 ? 'self-end' : 'flex justify-between'
          }`}
        >
          {form.formIndex > 0 && (
            <Button
              onClick={prevStep}
              className='bg-transparent text-gray-300 hover:bg-transparent hover:text-indigo-800'
              label='go back'
            />
          )}
          <Button onClick={nextStep} label='next step' />
        </div>
      </div>
    </section>
  );
}
