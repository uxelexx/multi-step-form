import Image from "next/image";

export default function FinalStep() {
  return (
    <div className="flex flex-col md:h-full -translate-y-32 bg-white rounded-lg px-6 py-24 md:translate-y-0 md:p-0 items-center justify-center">
      <Image alt="Thank you" width={80} height={80} src="/icon-thank-you.svg" />
      <h2 className="font-bold text-slate-700  text-3xl md:text-4xl pt-8">
        Thank you!
      </h2>
      <p className="text-gray-400 text-center pt-2">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@gmail.com
      </p>
    </div>
  );
}
