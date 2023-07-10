import { formatPrice } from '@/helpers/formatPrice';

type FinishingAddsProps = {
  heading: string;
  price: number;
  yearly: boolean;
};

export default function FinishingAdds({
  yearly,
  heading,
  price,
}: FinishingAddsProps) {
  const formatedPrice = formatPrice(yearly, price);

  return (
    <div className='flex'>
      <h6 className='flex-1 flex flex-col'>{heading}</h6>
      <span className='text-indigo-950'>{formatedPrice}</span>
    </div>
  );
}
