import { useAppSelector } from "@/redux/hooks";
import SidebarStep from "./SidebarStep";

export default function Sidebar() {
  const { index, formSteps } = useAppSelector((state) => state.formReducer);

  return (
    <aside className="w-[17rem] h-full bg-sidebar space-y-6 rounded-xl p-9 bg-cover">
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
