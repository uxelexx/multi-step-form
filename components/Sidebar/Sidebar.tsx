import { useForm } from '@/context/form-context';
import SidebarStep from './SidebarStep';

export default function Sidebar() {
  const { form } = useForm();

  return (
    <aside className='w-[17rem] h-full bg-sidebar space-y-6 rounded-xl p-9 bg-cover'>
      {form.formSteps.map((step, i) => {
        const isActive = form.formIndex === i;
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
