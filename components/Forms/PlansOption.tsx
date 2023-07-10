import { formatPrice } from '@/helpers/formatPrice';
import Image from 'next/image';
import { ChangeEvent } from 'react';

type PlansOptionType = {
  checked: boolean;
  img: string;
  heading: string;
  price: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  yearly: boolean;
};

export default function PlansOption({
  checked,
  img,
  heading,
  price,
  onChange,
  name,
  yearly,
}: PlansOptionType) {
  const formatedPrice = formatPrice(yearly, price);

  return (
    <label
      htmlFor={name}
      className={`flex flex-col border border-gray-300 rounded-xl w-1/3 p-4 cursor-pointer hover:border-indigo-800 duration-75 ${
        checked && 'bg-gray-100/50 border-indigo-800'
      }`}
    >
      <input
        onChange={onChange}
        checked={checked}
        value={heading}
        type='radio'
        id={name}
        className='hidden'
      />
      <Image src={img} width={40} height={40} alt='Arcade' />
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
