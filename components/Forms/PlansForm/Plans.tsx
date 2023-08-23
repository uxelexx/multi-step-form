import { useForm } from '@/context/form-context';
import { MouseEvent } from 'react';
import FormContainer from '../FormContainer';
import PlanOption from './PlanOption';
import PlansToggle from './PlansToggle';

export default function Plan() {
  const { form, setForm, toggleYearly } = useForm();

  function handlePlan(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    setForm(prev => ({
      ...prev,
      plan:
        (target.getAttribute('data-value') as keyof typeof PLAN_PRICE) ||
        'Arcade',
    }));
  }

  return (
    <FormContainer
      heading='Select your plan'
      description='You have the option of montly or yearly billing'
    >
      <fieldset role='radiogroup' className='flex space-x-5 mb-5'>
      </fieldset>
      <PlansToggle onClick={toggleYearly} yearly={form.plan.yearly} />
    </FormContainer>
  );
}
