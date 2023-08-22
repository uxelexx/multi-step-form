import { StepNav } from '@/components/Button/StepNav';
import { useForm } from '@/context/form-context';
import { countTotalPrice } from '@/helpers/countTotal';
import { ADDS_PRICE } from '@/helpers/prices';
import FormContainer from '../FormContainer';
import FinishingAdds from './FinishingAdds';
import FinishingPlan from './FinishingPlan';
import FinishingTotal from './FinishingTotal';

export default function Finishing() {
  const { form, toggleYearly } = useForm();
  const yearly = form.plan.yearly;
  const someAddOns =
    form.addOns.largeStorage ||
    form.addOns.customizableProfile ||
    form.addOns.onlineService;
  const totalPrice = countTotalPrice({
    plan: form.plan.type,
    service: form.addOns.onlineService,
    storage: form.addOns.largeStorage,
    profile: form.addOns.customizableProfile,
  });

  return (
    <FormContainer
      heading='Finishing up'
      description='Double-check everything looks OK before confirming.'
    >
      <div className='text-indigo-950 flex flex-col bg-gray-100/60 px-5 py-6 rounded-xl'>
        <div className='flex items-center'>
          <FinishingPlan
            onClick={toggleYearly}
            plan={form.plan.type}
            yearly={yearly}
          />
        </div>

        {someAddOns && <hr className='my-4' />}
        <div className='flex flex-col text-gray-400 space-y-4'>
          {form.addOns.onlineService && (
            <FinishingAdds
              heading='Onlince service'
              price={ADDS_PRICE.service}
              yearly={yearly}
            />
          )}
          {form.addOns.largeStorage && (
            <FinishingAdds
              heading='Larger storage'
              price={ADDS_PRICE.storage}
              yearly={yearly}
            />
          )}
          {form.addOns.customizableProfile && (
            <FinishingAdds
              heading='Customizable Profile'
              price={ADDS_PRICE.profile}
              yearly={yearly}
            />
          )}
        </div>
      </div>
      <FinishingTotal total={totalPrice} yearly={yearly} />
      <StepNav />
    </FormContainer>
  );
}
