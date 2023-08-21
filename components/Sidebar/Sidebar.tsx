import { useForm } from '@/context/form-context';
import SidebarStep from './SidebarStep';

export default function Sidebar() {
  const { form } = useForm();

  return (
    <div className='w-[29%] bg-sidebar space-y-6 rounded-xl p-9 bg-no-repeat'>
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
  );
}
