import React, { ReactNode } from 'react';
import { StepNav } from '../Button/StepNav';

type FormContainerProps = {
  heading?: string;
  description?: string;
  children?: ReactNode;
};

export default function FormContainer({
  heading,
  description,
  children,
}: FormContainerProps) {
  return (
    <div className='flex flex-col h-full'>
      <h2 className='font-bold pb-2 text-4xl text-indigo-950'>{heading}</h2>
      <p className='text-gray-400 pb-10'>{description}</p>
      {children}
      <StepNav />
    </div>
  );
}
