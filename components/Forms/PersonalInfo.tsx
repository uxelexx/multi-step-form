import { useForm } from '@/context/form-context';
import { ChangeEvent } from 'react';
import FormContainer from './FormContainer';

export default function PersonalInfo() {
  const { form, setForm } = useForm();

  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [e.target.name]: e.target.value,
      },
    }));
  }

  return (
    <FormContainer
      heading='Personal info'
      description='Please provide yoru name, email address, and phone number.'
    >
      <form className='text-indigo-950 flex flex-col space-y-6'>
        <label className='text-sm'>
          Name
          <input
            value={form.personal.userName}
            onChange={handleInputs}
            name='userName'
            placeholder='John Doe'
            className='mt-1 font-medium placeholder:text-gray-200 border border-gray-300 rounded-xl p-3 w-full text-base outline-none focus:border-indigo-700'
          />
        </label>
        <label className='text-sm capitalize'>
          Email address
          <input
            value={form.personal.userEmail}
            onChange={handleInputs}
            name='userEmail'
            placeholder='some@mail.com'
            className='mt-1 font-medium placeholder:text-gray-200 border border-gray-300 rounded-xl p-3 w-full text-base outline-none focus:border-indigo-700'
          />
        </label>
        <label className='text-sm capitalize'>
          Phone number
          <input
            value={form.personal.userPhone}
            onChange={handleInputs}
            name='userPhone'
            placeholder='+1 234 567 890'
            className='mt-1 font-medium placeholder:text-gray-200 border border-gray-300 rounded-xl p-3 w-full text-base outline-none focus:border-indigo-700'
          />
        </label>
      </form>
    </FormContainer>
  );
}
