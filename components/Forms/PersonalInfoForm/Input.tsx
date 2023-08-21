import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...rest }: InputProps) {
  return (
    <label className='text-indigo-950 capitalize text-sm'>
      {label}
      <input
        {...rest}
        required
        className='mt-2 font-medium placeholder:text-gray-200 border border-gray-300 rounded-xl p-3 w-full text-base outline-none focus:border-indigo-700'
      />
    </label>
  );
}
