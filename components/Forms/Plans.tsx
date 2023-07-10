import { useForm } from '@/context/form-context';
import FormContainer from './FormContainer';
import PlansOption from './PlansOption';
import { ChangeEvent } from 'react';
import PlansToggle from './PlansToggle';

export default function Plan() {
  const { form, setForm, toggleYearly } = useForm();

  function handlePlan(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({
      ...prev,
      plan: {
        ...prev.plan,
        type: e.target.value,
      },
    }));
  }

  return (
    <FormContainer
      heading='Select your plan'
      description='You have the option of montly or yearly billing'
    >
      <div>
        <div className='flex space-x-5'>
          <PlansOption
            yearly={form.plan.yearly}
            onChange={handlePlan}
            checked={form.plan.type === 'Arcade'}
            name='arcade'
            heading='Arcade'
            price='9'
            img='icon-arcade.svg'
          />
          <PlansOption
            yearly={form.plan.yearly}
            onChange={handlePlan}
            checked={form.plan.type === 'Advanced'}
            name='advanced'
            heading='Advanced'
            price='12'
            img='icon-advanced.svg'
          />
          <PlansOption
            yearly={form.plan.yearly}
            onChange={handlePlan}
            checked={form.plan.type === 'Pro'}
            name='pro'
            heading='Pro'
            price='15'
            img='icon-pro.svg'
          />
        </div>
        <div className='pt-8'>
          <PlansToggle onClick={toggleYearly} yearly={form.plan.yearly} />
        </div>
      </div>
    </FormContainer>
  );
}
