import { useForm } from '@/context/form-context';
import Button from './Button';

export function StepNav() {
  const { prevStep, nextStep } = useForm();
  return (
    <div className='flex justify-between flex-row-reverse mt-auto'>
      <Button onClick={nextStep} type='submit'>
        Next step
      </Button>
      <Button onClick={prevStep} variant='secondary'>
        Go back
      </Button>
    </div>
  );
}
