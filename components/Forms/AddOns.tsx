import React, { ChangeEvent } from 'react';
import FormContainer from './FormContainer';
import AddOnsBox from './AddOnsBox';
import { useForm } from '@/context/form-context';

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
      <div className='flex flex-col flex-1 space-y-5'>
        <AddOnsBox
          yearly={form.plan.yearly}
          onChange={handleAddOns}
          heading='Onlince service'
          desc='Access to multiplayer games'
          price={1}
          id='onlineService'
          checked={form.addOns.onlineService}
        />
        <AddOnsBox
          yearly={form.plan.yearly}
          onChange={handleAddOns}
          heading='Larger storage'
          desc='Extra 1TB of cloud save'
          price={2}
          id='largeStorage'
          checked={form.addOns.largeStorage}
        />
        <AddOnsBox
          yearly={form.plan.yearly}
          onChange={handleAddOns}
          heading='Customizable Profile'
          desc='Custom theme on your profile'
          price={2}
          id='customizableProfile'
          checked={form.addOns.customizableProfile}
        />
      </div>
    </FormContainer>
  );
}
