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
    <>
      <h5 className='flex-1 flex flex-col font-medium'>
        {plan} {`(${yearly ? 'Yearly' : 'Monthly'})`}
        <span
          onClick={onClick}
          className='cursor-pointer font-normal hover:text-indigo-600 text-gray-400 underline'
        >
          Change
        </span>
      </h5>
      <span>{formatedPrice}</span>
    </>
  );
}
