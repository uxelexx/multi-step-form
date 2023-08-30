import { cn } from "@/helpers/cn";
import Image from "next/image";
import { useEffect, useRef } from "react";

type PlansOptionType = {
  price: string;
  checked: boolean;
  plan: string;
  yearly: boolean;
  onClick: (e: any) => void; // TODO: Add type
};

export default function PlanOption({
  price,
  checked,
  plan,
  yearly,
  onClick,
}: PlansOptionType) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const radio = ref.current;

    if (!radio) return;

    function handleKeydown(e: KeyboardEvent) {
      if (
        document.activeElement === radio &&
        (e.key === "Enter" || e.key === " ")
      ) {
        onClick(e);
      }
    }

    radio.addEventListener("keydown", handleKeydown);

    return () => {
      radio.removeEventListener("keydown", handleKeydown);
    };
  }, [onClick]);

  return (
    <div
      role="radio"
      ref={ref}
      aria-checked={checked}
      data-value={plan}
      onClick={onClick}
      tabIndex={0}
      className={cn(
        "border border-gray-300 rounded-xl md:w-1/3 p-4 cursor-pointer hover:border-indigo-800 duration-75 outline-offset-4 outline-2 outline-indigo-300 w-full",
        checked && "bg-gray-100/50 border-indigo-800",
      )}
    >
      <label className="sr-only">{plan}</label>
      <div className="pointer-events-none flex md:flex-col space-x-5 md:space-x-0">
        <Image
          src={`icon-${plan.toLowerCase()}.svg`}
          width={40}
          height={40}
          alt={plan}
          className="self-start"
        />
        <div>
          <h5 className="block font-medium text-[1.1rem] text-indigo-950 md:pt-12">
            {plan}
          </h5>
          <p className="text-[0.95rem] text-gray-400">{price}</p>
          {yearly && <p className="text-indigo-950 text-sm">2 months free</p>}
        </div>
      </div>
    </div>
  );
}
