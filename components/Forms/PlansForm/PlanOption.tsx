import { formatPrice } from '@/helpers/formatPrice';
import Image from 'next/image';
import { InputHTMLAttributes } from 'react';

type PlansOptionType = InputHTMLAttributes<HTMLInputElement> & {
  icon: string;
  heading: string;
  price: string;
  yearly: boolean;
};

export default function PlanOption({
  icon,
  heading,
  price,
  yearly,
  ...props
}: PlansOptionType) {
  const formatedPrice = formatPrice(yearly, price);

  return (
    <label
      className={`flex flex-col border border-gray-300 rounded-xl w-1/3 p-4 cursor-pointer hover:border-indigo-800 duration-75 ${
        props.checked && 'bg-gray-100/50 border-indigo-800'
      }`}
    >
      <input {...props} value={heading} type='radio' className='hidden' />
      <Image src={icon} width={40} height={40} alt={heading} />
      <div>
        <h5 className='block font-medium text-[1.1rem] text-indigo-950 pt-12'>
          {heading}
        </h5>
        <p className='text-[0.95rem] text-gray-400'>{formatedPrice}</p>
        {yearly && <p className='text-indigo-950 text-sm'>2 months free</p>}
      </div>
    </label>
  );
}
