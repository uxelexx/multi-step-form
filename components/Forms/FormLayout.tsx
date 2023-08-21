import { ReactNode } from 'react';
import Button from '../Button/Button';

type FormLayoutProps = {
  children: ReactNode;
  prevStep: () => void;
  nextStep: () => void;
  confirm: () => void;
  page: number;
  done: boolean;
};

type ButtonsProps = Omit<FormLayoutProps, 'children' | 'done'>;

export default function FormLayout({
  children,
  prevStep,
  nextStep,
  confirm,
  page,
  done,
}: FormLayoutProps) {
  return (
    <div className='flex flex-col flex-1 pt-10 pb-5 px-20 h-full'>
      {children}
      {/* <div className={`${page === 0 ? 'self-end' : 'flex justify-between'}`}>
        {!done && (
          <Buttons
            nextStep={nextStep}
            prevStep={prevStep}
            confirm={confirm}
            page={page}
          />
        )}
      </div> */}
    </div>
  );
}

function Buttons({ nextStep, prevStep, confirm, page }: ButtonsProps) {
  return (
    <>
      {page > 0 && (
        <Button
          onClick={prevStep}
          className='bg-transparent text-black text-opacity-30 hover:bg-transparent hover:text-indigo-800'
          label='go back'
        />
      )}
      {page === 3 ? (
        <Button onClick={confirm} label='Confirm' />
      ) : (
        <Button onClick={nextStep} label='next step' />
      )}
    </>
  );
}
