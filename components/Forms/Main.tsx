'use client';

import { useForm } from '@/context/form-context';
import Sidebar from '../Sidebar/Sidebar';
import AllForms, { FormIndex } from './AllForms';
import FinalStep from './FinalStep';
import MainLayout from './MainLayout';

export default function Main() {
  const {
    form: { formIndex, done },
    prevStep,
    nextStep,
    confirm,
  } = useForm();

  return (
    <section className='flex content-center rounded-xl w-[min(58rem,90vw)] h-[37rem] bg-white p-4'>
      <Sidebar />
      <MainLayout
        page={formIndex}
        prevStep={prevStep}
        nextStep={nextStep}
        confirm={confirm}
        done={done}
      >
        {done ? <FinalStep /> : <AllForms index={formIndex as FormIndex} />}
      </MainLayout>
    </section>
  );
}
