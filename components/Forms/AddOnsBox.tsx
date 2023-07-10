import { formatPrice } from '@/helpers/formatPrice';
import { ChangeEvent } from 'react';

type AddOnsBoxProps = {
  heading: string;
  desc: string;
  price: number;
  checked: boolean;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  yearly: boolean;
};
export default function AddOnsBox({
  heading,
  desc,
  price,
  checked,
  id,
  onChange,
  yearly,
}: AddOnsBoxProps) {
  const formatedPrice = formatPrice(yearly, price);

  return (
    <label
      className={`flex items-center text-indigo-950 border hover:border-indigo-950 border-gray-300 rounded-xl py-4 px-7 cursor-pointer space-x-6 ${
        checked && 'border-indigo-950 bg-gray-100/60'
      }`}
      htmlFor={id}
    >
      <input
        onChange={onChange}
        name={id}
        type='checkbox'
        id={id}
        className='w-5 h-5'
        checked={checked}
      />
      <div className='flex-1'>
        <h5 className='font-medium leading-5 text-[1.05rem]'>{heading}</h5>
        <span className='text-gray-400'>{desc}</span>
      </div>
      <div className=''>
        <p className='text-indigo-600'>{formatedPrice}</p>
      </div>
    </label>
  );
}
