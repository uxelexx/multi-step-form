type SidebarStepProps = {
  stepNum: number;
  stepInfo: string;
  active: boolean;
};

export default function SidebarStep({
  stepNum,
  stepInfo,
  active,
}: SidebarStepProps) {
  return (
    <div className="flex items-center md:space-x-4">
      <div
        className={`${
          active
            ? "bg-sky-200 text-indigo-950"
            : "bg-transparent text-white border border-sky-200"
        } w-8 h-8 bg-sky-200 rounded-full grid place-items-center font-bold`}
      >
        {stepNum}
      </div>
      <div className="flex flex-col">
        <span className="text-xs md:block  hidden text-gray-200/70 font-normal">{`Step ${stepNum}`}</span>
        <h5 className="uppercase md:block hidden text-white font-medium text-[0.9rem] tracking-wider">
          {stepInfo}
        </h5>
      </div>
    </div>
  );
}
