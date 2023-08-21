import { useForm } from '@/context/form-context';
import { ChangeEvent } from 'react';
import FormContainer from '../FormContainer';
import { Input } from './Input';
import Button from '@/components/Button/Button';

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
      description='Please provide your name, email address, and phone number.'
    >
      <form className='flex flex-col h-full'>
        <div className='flex flex-col space-y-6'>
          <Input
            label='Name'
            type='text'
            name='userName'
            placeholder='John Doe'
            value={form.personal.userName}
            onChange={handleInputs}
          />
          <Input
            label='Email address'
            name='userEmail'
            type='email'
            placeholder='some@mail.com'
            value={form.personal.userEmail}
            onChange={handleInputs}
          />
          <Input
            label='Phone number'
            name='userPhone'
            placeholder='+1 234 567 890'
            type='tel'
            value={form.personal.userPhone}
            onChange={handleInputs}
          />
        </div>
        <Button label='Next step' className='mt-auto ml-auto' />
      </form>
    </FormContainer>
  );
}
