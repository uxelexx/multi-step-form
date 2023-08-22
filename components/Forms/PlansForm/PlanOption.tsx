import { cn } from '@/helpers/cn';
import { formatPrice } from '@/helpers/formatPrice';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type PlansOptionType = {
  icon: string;
  price: number;
  yearly: boolean;
  checked: boolean;
  value: string;
  onClick: (e: any) => void; // TODO: Add type
};

export default function PlanOption({
  icon,
  price,
  yearly,
  checked,
  value,
  onClick,
}: PlansOptionType) {
  const formatedPrice = formatPrice(yearly, price);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const radio = ref.current;

    if (!radio) return;

    function handleKeydown(e: KeyboardEvent) {
      if (
        document.activeElement === radio &&
        (e.key === 'Enter' || e.key === ' ')
      ) {
        onClick(e);
      }
    }

    radio.addEventListener('keydown', handleKeydown);

    return () => {
      radio.removeEventListener('keydown', handleKeydown);
    };
  }, [onClick]);

  return (
    <div
      role='radio'
      ref={ref}
      aria-checked={checked}
      data-value={value}
      onClick={onClick}
      tabIndex={0}
      className={cn(
        'flex flex-col border border-gray-300 rounded-xl w-1/3 p-4 cursor-pointer hover:border-indigo-800 duration-75 outline-offset-4 outline-2 outline-indigo-300',
        checked && 'bg-gray-100/50 border-indigo-800',
      )}
    >
      <label className='sr-only'>{value}</label>
      <div className='pointer-events-none'>
        <Image src={icon} width={40} height={40} alt={value} />
        <div>
          <h5 className='block font-medium text-[1.1rem] text-indigo-950 pt-12'>
            {value}
          </h5>
          <p className='text-[0.95rem] text-gray-400'>{formatedPrice}</p>
          {yearly && <p className='text-indigo-950 text-sm'>2 months free</p>}
        </div>
      </div>
    </div>
  );
}
