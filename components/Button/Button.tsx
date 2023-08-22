import { cn } from '@/helpers/cn';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
  onClick?: () => void;
  variant?: keyof typeof variants;
};

const variants = {
  primary: 'bg-indigo-800 hover:bg-indigo-600 text-white hover:bg-indigo-600',
  secondary: 'bg-transparent hover:text-indigo-600 text-black text-opacity-30',
};

export default function Button({
  className,
  onClick,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        'font-medium w-32 py-3 px-5 rounded-lg capitalize duration-75',
        variants[variant],
        className,
      )}
    >
      {props.children}
    </button>
  );
}
