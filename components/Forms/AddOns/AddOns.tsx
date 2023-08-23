import { useForm } from '@/context/form-context';
import { ADDS } from '@/helpers/prices';
import { ChangeEvent } from 'react';
import FormContainer from '../FormContainer';
import AddOnsBox from './AddOnsCard';

type AddsKeysType = keyof typeof ADDS;

export default function AddOns() {
  const { form, setForm } = useForm();

  function handleAddOns(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        [e.target.name]: e.target.checked,
      },
    }));
  }

  return (
    <FormContainer
      heading='Pick add-ons'
      description='Add-ons help enchance your gaming experience.'
    >
      <fieldset className='flex flex-col flex-1 space-y-5'>
        {Object.entries(ADDS).map(([add, value]) => (
          <AddOnsBox
            key={add}
            name={add}
            checked={form.addOns[add as AddsKeysType].included}
            onChange={handleAddOns}
            yearly={form.yearly}
            {...value}
          />
        ))}
      </fieldset>
    </FormContainer>
  );
}
