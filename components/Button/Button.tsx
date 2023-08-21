import { cn } from '@/helpers/cn';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ className, onClick, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        'font-medium w-32 text-white bg-indigo-800 hover:bg-indigo-600 py-3 px-5 rounded-lg capitalize duration-75',
        className,
      )}
    >
      {props.children}
    </button>
  );
}
