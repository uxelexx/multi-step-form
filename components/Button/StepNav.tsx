import { useForm } from '@/context/form-context';
import Button from './Button';

export function StepNav() {
  const { prevStep, nextStep, form, confirm } = useForm();
  const isFirstStep = form.formIndex === 0;
  const isLastStep = form.formIndex === form.formSteps.length - 1;

  if (isFirstStep) {
    return null;
  }

  return (
    <div className='flex flex-row-reverse mt-auto'>
      {isLastStep ? (
        <Button onClick={confirm}>Confirm</Button>
      ) : (
        <Button onClick={nextStep}>Next step</Button>
      )}
      <Button onClick={prevStep} className='mr-auto' variant='secondary'>
        Go back
      </Button>
      )
    </div>
  );
}
