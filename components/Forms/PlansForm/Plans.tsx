import { useForm } from '@/context/form-context';
import FormContainer from '../FormContainer';
import PlanOption from './PlanOption';
import { ChangeEvent } from 'react';
import PlansToggle from './PlansToggle';
import Button from '@/components/Button/Button';

export default function Plan() {
  const { form, setForm, toggleYearly, nextStep, prevStep } = useForm();

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
      <form onSubmit={nextStep} className='h-full flex-col flex'>
        <div className='flex space-x-5'>
          <PlanOption
            yearly={form.plan.yearly}
            onChange={handlePlan}
            checked={form.plan.type === 'Arcade'}
            heading='Arcade'
            price='9'
            icon='icon-arcade.svg'
          />
          <PlanOption
            yearly={form.plan.yearly}
            onChange={handlePlan}
            checked={form.plan.type === 'Advanced'}
            heading='Advanced'
            price='12'
            icon='icon-advanced.svg'
          />
          <PlanOption
            yearly={form.plan.yearly}
            onChange={handlePlan}
            checked={form.plan.type === 'Pro'}
            heading='Pro'
            price='15'
            icon='icon-pro.svg'
          />
        </div>
        <PlansToggle
          className='mt-8'
          onClick={toggleYearly}
          yearly={form.plan.yearly}
        />
        <div className='flex justify-between mt-auto'>
          <Button
            onClick={prevStep}
            className='bg-transparent text-black text-opacity-30 hover:bg-transparent hover:text-indigo-600'
          >
            Go back
          </Button>
          <Button type='submit'>Next step</Button>
        </div>
      </form>
    </FormContainer>
  );
}
