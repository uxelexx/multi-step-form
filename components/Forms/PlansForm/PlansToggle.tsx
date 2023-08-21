import { cn } from '@/helpers/cn';
import React from 'react';

type PlansToggleProps = {
  yearly: boolean;
  onClick: () => void;
  className?: string;
};

export default function PlansToggle({
  yearly,
  onClick,
  className,
}: PlansToggleProps) {
  return (
    <div
      className={cn(
        'w-full font-medium text-gray-400/70 h-14 bg-gray-100/70 rounded-xl justify-center flex items-center space-x-6',
        className,
      )}
    >
      <span className={`${!yearly && 'text-indigo-950'}`}>Monthly</span>
      <div
        onClick={onClick}
        className='cursor-pointer relative w-9 h-5 p-1 bg-indigo-950 flex items-center rounded-full duration-100 ease-in-out'
      >
        <div
          className={`absolute w-3 h-3 bg-white rounded-full duration-150 ease-in-out ${
            yearly && 'translate-x-4'
          }`}
        ></div>
      </div>
      <span className={`${yearly && 'text-indigo-950'}`}>Yearly</span>
    </div>
  );
}
