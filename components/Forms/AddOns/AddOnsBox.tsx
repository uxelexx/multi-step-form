import { cn } from '@/helpers/cn';
import { formatPrice } from '@/helpers/formatPrice';
import { ChangeEvent, InputHTMLAttributes, useRef } from 'react';

type AddOnsBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  desc: string;
  price: number;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  yearly: boolean;
};
export default function AddOnsBox({
  label,
  desc,
  price,
  checked,
  onChange,
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
        checked && 'border-indigo-800 bg-indigo-100/50',
      )}
    >
      <input
        {...props}
        ref={inputRef}
        onChange={onChange}
        id={props.name}
        type='checkbox'
        className='w-5 peer h-5 relative border-indigo-300 appearance-none border rounded-md shrink-0 checked:border-none bg-white checked:bg-indigo-500 outline-indigo-300'
        checked={checked}
      />
      <svg
        className='absolute pointer-events-none left-[6px] w-4 h-4 hidden text-white peer-checked:block'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='20 6 9 17 4 12'></polyline>
      </svg>
      <div className='flex-1'>
        <label className='font-medium leading-5 text-[1.05rem] cursor-pointer block'>
          {label}
        </label>
        <span className='text-gray-400'>{desc}</span>
      </div>
      <p className='text-indigo-600'>{formatedPrice}</p>
    </div>
  );
}
