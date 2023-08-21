import Button from '@/components/Button/Button';
import { useForm } from '@/context/form-context';
import { ChangeEvent } from 'react';
import FormContainer from '../FormContainer';
import PlanOption from './PlanOption';
import PlansToggle from './PlansToggle';
import plans from './plans.json';

export default function Plan() {
  const { form, setForm, toggleYearly, nextStep, prevStep } = useForm();

  function handlePlan(e: ChangeEvent<HTMLInputElement>) {
    console.dir(e.target);
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
      <form onSubmit={nextStep} className='h-full flex-col flex'>
        <div role='radiogroup' className='flex space-x-5'>
          {plans.map(option => (
            <PlanOption
              yearly={form.plan.yearly}
              checked={form.plan.type === option.value}
              onChange={handlePlan}
              key={option.value}
              {...option}
            />
          ))}
        </div>
        <PlansToggle
          className='mt-8'
          onClick={toggleYearly}
          yearly={form.plan.yearly}
        />
        <div className='flex justify-between mt-auto'>
          <Button onClick={prevStep} variant='secondary'>
            Go back
          </Button>
          <Button type='submit'>Next step</Button>
        </div>
      </form>
    </FormContainer>
  );
}
