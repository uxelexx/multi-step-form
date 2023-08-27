import type { PersonalInfoField } from "@/types";
import { type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: PersonalInfoField;
};

export function Input({ name, label, ...props }: InputProps) {
  return (
    <label className="text-indigo-950 capitalize text-sm">
      {label}
      <input
        name={name}
        {...props}
        className="mt-2 font-medium placeholder:text-gray-200 border border-gray-300 rounded-xl p-3 w-full text-base"
      />
    </label>
  );
}
