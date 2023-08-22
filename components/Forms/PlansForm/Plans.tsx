import Button from '@/components/Button/Button';
import { useForm } from '@/context/form-context';
import { MouseEvent } from 'react';
import FormContainer from '../FormContainer';
import PlanOption from './PlanOption';
import PlansToggle from './PlansToggle';
import plans from './plans.json';
import { StepNav } from '@/components/Button/StepNav';

export default function Plan() {
  const { form, setForm, toggleYearly, nextStep, prevStep } = useForm();

  function handlePlan(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    setForm(prev => ({
      ...prev,
      plan: {
        ...prev.plan,
        type: target.getAttribute('data-value') || 'Arcade',
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
              onClick={handlePlan}
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
        <StepNav />
      </form>
    </FormContainer>
  );
}
