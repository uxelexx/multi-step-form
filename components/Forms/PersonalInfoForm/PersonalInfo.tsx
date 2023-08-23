import { useForm } from '@/context/form-context';
import { ChangeEvent } from 'react';
import FormContainer from '../FormContainer';
import { Input } from './Input';
import Button from '@/components/Button/Button';

// TODO:
// 1) Refactor to useForm with Zod validation

export default function PersonalInfo() {
  const { form, setForm, nextStep } = useForm();

  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [e.target.name]: e.target.value,
      },
    }));
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    nextStep();
  }

  return (
    <FormContainer
      heading='Personal info'
      description='Please provide your name, email address, and phone number.'
    >
      <form onSubmit={handleSubmit} className='flex flex-col h-full'>
        <div className='flex flex-col space-y-6'>
          <Input
            autoFocus
            min={5}
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
        <Button type='submit' className='mt-auto ml-auto'>
          Next step
        </Button>
      </form>
    </FormContainer>
  );
}
