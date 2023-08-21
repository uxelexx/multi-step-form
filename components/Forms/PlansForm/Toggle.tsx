export type ToggleProps = {
  isToggled: boolean;
  label: string;
  onClick: () => void;
};

export function Toggle({ label, onClick, isToggled }: ToggleProps) {
  return (
    <button
      role='switch'
      type='button'
      tabIndex={0}
      onClick={onClick}
      aria-checked={isToggled}
      className='cursor-pointer relative w-10 h-6 px-1 bg-indigo-800 flex items-center rounded-full duration-100 ease-in-out outline-indigo-300'
    >
      <span className='sr-only'>{label}</span>
      <span
        aria-hidden='true'
        className={`w-4 pointer-events-none h-4 bg-white rounded-full shadow-lg duration-200 ease-in-out ${
          isToggled && 'translate-x-4'
        }`}
      ></span>
    </button>
  );
}
