import React from 'react';

type ButtonProps = {
  label?: string;
};

export default function Button({ label }: ButtonProps) {
  return (
    <button className='w-32 text-white bg-indigo-800 hover:bg-indigo-600 py-3 px-5 rounded-lg capitalize duration-75'>
      {label}
    </button>
  );
}
