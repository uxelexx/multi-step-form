import Image from 'next/image';

export default function FinalStep() {
  return (
    <div className='text-indigo-950 grid place-items-center my-auto space-y-4'>
      <Image alt='Thank you' width={80} height={80} src='/icon-thank-you.svg' />
      <h2 className='font-bold text-4xl pt-5'>Thank you!</h2>
      <p className='text-gray-400 text-center'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@gmail.com
      </p>
    </div>
  );
}
