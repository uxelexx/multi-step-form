import React from 'react';

type ButtonProps = {
  label?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ label, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`font-medium w-32 text-white bg-indigo-800 hover:bg-indigo-600 py-3 px-5 rounded-lg capitalize duration-75 ${className}`}
    >
      {label}
    </button>
  );
}
