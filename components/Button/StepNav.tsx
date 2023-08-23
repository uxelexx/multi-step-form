import { useForm } from '@/context/form-context';
import Button from './Button';
import { finishForm, nextStep, prevStep } from '@/helpers/uitls';

export function StepNav() {
  const { form, setForm, lastPage } = useForm();
  const isFirstStep = form.formIndex === 0;
  const isLastStep = form.formIndex === form.formSteps.length - 1;

  const confirm = () => finishForm(lastPage, setForm);
  const next = () => nextStep(lastPage, setForm);
  const prev = () => prevStep(form.formIndex, setForm);

  if (isFirstStep) {
    return null;
  }

  return (
    <div className='flex flex-row-reverse mt-auto'>
      {isLastStep ? (
        <Button onClick={confirm}>Confirm</Button>
      ) : (
        <Button onClick={next}>Next step</Button>
      )}
      <Button onClick={prev} className='mr-auto' variant='secondary'>
        Go back
      </Button>
      )
    </div>
  );
}
