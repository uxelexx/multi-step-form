import { useForm } from '@/context/form-context';
import { formatPrice } from '@/helpers/formatPrice';
import { PLANS } from '@/helpers/prices';
import { MouseEvent } from 'react';
import FormContainer from '../FormContainer';
import PlanOption from './PlanOption';
import PlansToggle from './PlansToggle';
import { toggleYearly } from '@/helpers/uitls';

export default function Plan() {
  const { form, setForm } = useForm();

  const toggle = () => toggleYearly(setForm);

  function handlePlan(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    setForm(prev => ({
      ...prev,
      plan:
        (target.getAttribute('data-value') as keyof typeof PLANS) || 'Arcade',
    }));
  }

  return (
    <FormContainer
      heading='Select your plan'
      description='You have the option of montly or yearly billing'
    >
      <fieldset role='radiogroup' className='flex space-x-5 mb-5'>
        {Object.entries(PLANS).map(([plan, cost]) => {
          const price = formatPrice(form.yearly, cost);

          return (
            <PlanOption
              key={plan}
              plan={plan}
              price={price}
              yearly={form.yearly}
              checked={form.plan === plan}
              onClick={handlePlan}
            />
          );
        })}
      </fieldset>
      <PlansToggle onClick={toggle} yearly={form.yearly} />
    </FormContainer>
  );
}
