import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from "react";

export const AddOnsCheckboxInput = forwardRef(function ChechboxInput(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <>
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className="w-5 cursor-pointer peer h-5 relative border-indigo-300 appearance-none border rounded-md shrink-0 checked:border-none bg-white checked:bg-indigo-500 outline-indigo-300"
      />
      <svg
        className="absolute pointer-events-none left-[6px] w-4 h-4 hidden text-white peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </>
  );
});
