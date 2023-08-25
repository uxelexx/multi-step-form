import { formatPrice } from "@/helpers/formatPrice";

type FinishingTotalProps = {
  yearly: boolean;
  total: number;
};

export default function FinishingTotal({ yearly, total }: FinishingTotalProps) {
  const formatedPrice = formatPrice(yearly, total);
  return (
    <div className="px-5 py-6 flex items-center">
      <p className="text-gray-400 flex-1">
        Total (per {`${yearly ? "year" : "month"}`})
      </p>
      <span className="text-indigo-600 font-bold text-2xl">
        {formatedPrice}
      </span>
    </div>
  );
}
