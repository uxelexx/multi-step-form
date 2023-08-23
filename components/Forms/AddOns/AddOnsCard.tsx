import { cn } from '@/helpers/cn';
import { formatPrice } from '@/helpers/formatPrice';
import { InputHTMLAttributes, useRef } from 'react';
import { AddOnsCheckboxInput } from './AddOnsCheckboxInput';

type AddOnsBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  desc: string;
  price: number;
  yearly: boolean;
};
export default function AddOnsBox({
  label,
  desc,
  price,
  yearly,
  ...props
}: AddOnsBoxProps) {
  const formatedPrice = formatPrice(yearly, price);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDivClick() {
    if (document.activeElement !== inputRef.current) inputRef.current?.click();
  }

  return (
    <div
      onClick={handleDivClick}
      className={cn(
        'flex relative items-center text-indigo-950 outline-indigo-300 outline-offset-3 border hover:border-indigo-950 border-gray-300 rounded-xl py-4 px-7 cursor-pointer space-x-6',
        props.checked && 'border-indigo-800 bg-indigo-100/50',
      )}
    >
      <AddOnsCheckboxInput ref={inputRef} {...props} />
      <div className='flex-1 pointer-events-none'>
        <label className='font-medium leading-5 text-[1.05rem] block'>
          {label}
        </label>
        <span className='text-gray-400'>{desc}</span>
      </div>
      <p className='text-indigo-600'>{formatedPrice}</p>
    </div>
  );
}