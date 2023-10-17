import { toggleYearly } from "@/redux/features/formSlice";
import { setPlan } from "@/redux/features/planSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { PlanType } from "@/types";
import type { MouseEvent } from "react";

export function usePlans() {
  const dispatch = useAppDispatch();
  const plan = useAppSelector(state => state.planReducer);
  const { yearly } = useAppSelector(state => state.formReducer);
  const toggleYear = () => dispatch(toggleYearly());

  function handlePlan(e: MouseEvent<HTMLDivElement> | KeyboardEvent) {
    const target = e.target as HTMLElement;
    const plan = target.getAttribute("data-value") as PlanType;

    dispatch(setPlan(plan));
  }

  return {
    plan,
    yearly,
    toggleYear,
    handlePlan,
  };
}
