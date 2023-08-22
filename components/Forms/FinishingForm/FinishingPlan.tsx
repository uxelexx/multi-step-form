import { formatPrice } from '@/helpers/formatPrice';
import { PLAN_PRICE } from '@/helpers/prices';

type FinishingPlanProps = {
  yearly: boolean;
  onClick: () => void;
  plan: string;
};

export default function FinishingPlan({
  yearly,
  onClick,
  plan,
}: FinishingPlanProps) {
  const formatedPrice = formatPrice(yearly, PLAN_PRICE[plan]);
  return (
    <div className='flex w-full'>
      <div>
        <h5 className='font-medium'>
          {plan} {`(${yearly ? 'Yearly' : 'Monthly'})`}
        </h5>
        <button
          type='button'
          role='switch'
          aria-checked={yearly}
          onClick={onClick}
          className='active:text-indigo-600 rounded custom-outline cursor-pointer font-normal hover:text-indigo-600 text-gray-400 underline'
        >
          Change
        </button>
      </div>
      <span className='ml-auto my-auto'>{formatedPrice}</span>
    </div>
  );
}
