import { useForm } from '@/context/form-context';
import { ChangeEvent } from 'react';
import FormContainer from '../FormContainer';
import AddOnsBox from './AddOnsCard';
import addons from './addons.json';

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
        {addons.map(add => (
          <AddOnsBox
            key={add.name}
            checked={form.addOns[add.name as keyof typeof form.addOns]}
            onChange={handleAddOns}
            yearly={form.plan.yearly}
            {...add}
          />
        ))}
      </fieldset>
    </FormContainer>
  );
}
