import AddOns from './AddOns';
import Finishing from './Finishing';
import PersonalInfo from './PersonalInfo';
import Plans from './Plans';

export type FormIndex = keyof typeof ALL_FORMS;

type AllFormsProps = {
  index: FormIndex;
};

const ALL_FORMS = {
  0: <PersonalInfo />,
  1: <Plans />,
  2: <AddOns />,
  3: <Finishing />,
};

export default function AllForms({ index }: AllFormsProps) {
  return ALL_FORMS[index];
}
