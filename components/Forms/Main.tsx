"use client";

import { useAppSelector } from "@/redux/hooks";
import { MobileStepNav } from "../Button/MobileStepNav";
import Sidebar from "../Sidebar/Sidebar";
import AllForms, { type FormIndex } from "./AllForms";
import FinalStep from "./FinalStep";

export default function Main() {
  const { index, done } = useAppSelector(state => state.formReducer);

  return (
    <section className="flex md:flex-row flex-col md:rounded-xl md:w-[min(58rem,90vw)] md:h-[37rem] bg-white md:p-4 h-screen w-full rounded-none">
      <Sidebar />
      <div className="flex flex-col flex-1 pt-10 md:pb-5 md:px-20 px-5 md:bg-transparent bg-sky-100 h-full">
        {done ? <FinalStep /> : <AllForms index={index as FormIndex} />}
        {!done && <MobileStepNav />}
      </div>
    </section>
  );
}
