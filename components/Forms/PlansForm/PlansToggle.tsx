import { cn } from '@/helpers/cn';
import { Toggle } from './Toggle';

type PlansToggleProps = {
  yearly: boolean;
  onClick: () => void;
  className?: string;
};

export default function PlansToggle({
  yearly,
  onClick,
  className,
}: PlansToggleProps) {
  return (
    <div
      className={cn(
        'w-full font-medium text-gray-400/70 h-14 bg-gray-100/70 rounded-xl justify-center flex items-center space-x-6',
        className,
      )}
    >
      <span className={`${!yearly && 'text-indigo-950'}`}>Monthly</span>
      <Toggle isToggled={yearly} onClick={onClick} label='Yearly plan switch' />
      <span className={`${yearly && 'text-indigo-950'}`}>Yearly</span>
    </div>
  );
}
