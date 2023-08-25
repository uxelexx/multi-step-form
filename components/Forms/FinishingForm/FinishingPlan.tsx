import { formatPlan } from "@/helpers/formatPlan";

type FinishingPlanProps = {
  yearly: boolean;
  onClick: () => void;
  price: string;
  plan: string;
};

export default function FinishingPlan({
  yearly,
  onClick,
  plan,
  price,
}: FinishingPlanProps) {
  const formatedPlan = formatPlan(yearly, plan);

  return (
    <div className="flex w-full">
      <div>
        <h5 className="font-medium">{formatedPlan}</h5>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          onClick={onClick}
          className="active:text-indigo-600 rounded custom-outline cursor-pointer font-normal hover:text-indigo-600 text-gray-400 underline"
        >
          Change
        </button>
      </div>
      <span className="ml-auto my-auto">{price}</span>
    </div>
  );
}
