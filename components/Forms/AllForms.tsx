import AddOns from './AddOns/AddOns';
import FinalStep from './FinalStep';
import Finishing from './FinishingForm/Finishing';
import PersonalInfo from './PersonalInfoForm/PersonalInfo';
import Plans from './PlansForm/Plans';

export type FormIndex = keyof typeof ALL_FORMS;

type AllFormsProps = {
  index: FormIndex;
};

const ALL_FORMS = {
  0: <PersonalInfo />,
  1: <Plans />,
  2: <AddOns />,
  3: <Finishing />,
  4: <FinalStep />,
};

export default function AllForms({ index }: AllFormsProps) {
  return ALL_FORMS[index];
}
