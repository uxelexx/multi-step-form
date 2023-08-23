import Main from '@/components/Forms/Main';
import { FormProvider } from '@/context/form-context';

export default function Home() {
  return (
    <main className='grid place-items-center min-h-screen font-ubuntu'>
      <FormProvider>
        <Main />
      </FormProvider>
    </main>
  );
}
