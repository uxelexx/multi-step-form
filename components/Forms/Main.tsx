'use client';

import { useForm } from '@/context/form-context';
import Sidebar from '../Sidebar/Sidebar';
import AllForms, { FormIndex } from './AllForms';
import FinalStep from './FinalStep';

export default function Main() {
  const {
    form: { formIndex, done },
  } = useForm();

  return (
    <section className='flex rounded-xl w-[min(58rem,90vw)] h-[37rem] bg-white p-4'>
      <Sidebar />
      <div className='flex flex-col flex-1 pt-10 pb-5 px-20 h-full'>
        {done ? <FinalStep /> : <AllForms index={formIndex as FormIndex} />}
      </div>
    </section>
  );
}

// <div className='flex flex-col flex-1 pt-10 pb-5 px-20 h-full'>
//   {done ? <FinalStep /> : <AllForms index={formIndex as FormIndex} />}
// </div>
