import type { PersonalInfoField } from "@/public/types/types";
import { type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: PersonalInfoField;
};

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <label className="text-indigo-950 capitalize text-sm">
      {label}
      <input
        name={name}
        {...rest}
        // required ------------- UNCOMMENT LATER
        className="mt-2 font-medium placeholder:text-gray-200 border border-gray-300 rounded-xl p-3 w-full text-base"
      />
    </label>
  );
}
