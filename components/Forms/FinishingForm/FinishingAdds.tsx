type FinishingAddsProps = {
  heading: string;
  price: string;
  yearly: boolean;
  included: boolean;
};

export default function FinishingAdds({
  heading,
  price,
  included,
}: FinishingAddsProps) {
  if (!included) return null;

  return (
    <div className='flex'>
      <h6 className='flex-1 flex flex-col'>{heading}</h6>
      <span className='text-indigo-950'>{price}</span>
    </div>
  );
}
