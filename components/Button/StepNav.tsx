import { useForm } from '@/context/form-context';
import Button from './Button';

export function StepNav() {
  const { prevStep, nextStep } = useForm();
  return (
    <div className='flex justify-between mt-auto'>
      <Button onClick={prevStep} variant='secondary'>
        Go back
      </Button>
      <Button onClick={nextStep} type='submit'>
        Next step
      </Button>
    </div>
  );
}
