import { useAppSelector } from "@/redux/hooks";
import SidebarStep from "./SidebarStep";

export default function Sidebar() {
  const { index, formSteps } = useAppSelector(state => state.formReducer);

  return (
    <aside className="md:w-[17rem] md:block md:h-full bg-sidebar-mobile md:bg-sidebar md:space-y-6 md:rounded-xl md:p-9 bg-cover flex items-center justify-center pt-10 pb-32 space-x-4 md:space-x-0">
      {formSteps.map((step, i) => {
        const isActive = index === i;
        return (
          <SidebarStep
            key={i}
            active={isActive}
            stepInfo={step}
            stepNum={i + 1}
          />
        );
      })}
    </aside>
  );
}
