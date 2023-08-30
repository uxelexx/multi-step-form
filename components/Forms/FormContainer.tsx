import React, { type ReactNode } from "react";
import { StepNav } from "../Button/StepNav";

type FormContainerProps = {
  heading: string;
  description: string;
  children: ReactNode;
};

export default function FormContainer({
  heading,
  description,
  children,
}: FormContainerProps) {
  return (
    <div className="flex flex-col md:h-full h-fit -translate-y-32 bg-white rounded-lg px-6 py-8 md:translate-y-0 md:p-0">
      <h2 className="font-bold pb-2 text-4xl text-indigo-950">{heading}</h2>
      <p className="text-gray-400 pb-10">{description}</p>
      {children}
      <StepNav />
    </div>
  );
}
