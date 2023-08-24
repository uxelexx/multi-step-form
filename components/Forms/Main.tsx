"use client";

import { useAppSelector } from "@/redux/hooks";
import Sidebar from "../Sidebar/Sidebar";
import AllForms, { FormIndex } from "./AllForms";
import FinalStep from "./FinalStep";

export default function Main() {
  const { index, done } = useAppSelector((state) => state.formReducer);

  return (
    <section className="flex rounded-xl w-[min(58rem,90vw)] h-[37rem] bg-white p-4">
      <Sidebar />
      <div className="flex flex-col flex-1 pt-10 pb-5 px-20 h-full">
        {done ? <FinalStep /> : <AllForms index={index as FormIndex} />}
      </div>
    </section>
  );
}
