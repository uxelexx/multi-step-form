import { formatPrice } from "@/helpers/formatPrice";
import { type MouseEvent } from "react";
import FormContainer from "../FormContainer";
import PlanOption from "./PlanOption";
import PlansToggle from "./PlansToggle";

import { toggleYearly } from "@/redux/features/formSlice";
import {
  plansPrices,
  setPlan,
  type PlansKey,
} from "@/redux/features/planSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Plan() {
  const { yearly } = useAppSelector((state) => state.formReducer);
  const plan = useAppSelector((state) => state.planReducer);
  const dispatch = useAppDispatch();

  const toggleYear = () => dispatch(toggleYearly());

  function handlePlan(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const plan = target.getAttribute("data-value") as PlansKey;

    dispatch(setPlan(plan));
  }

  return (
    <FormContainer
      heading="Select your plan"
      description="You have the option of montly or yearly billing"
    >
      <fieldset role="radiogroup" className="flex space-x-5 mb-5">
        {Object.entries(plansPrices).map(([planType, cost]) => {
          const price = formatPrice(yearly, cost);

          return (
            <PlanOption
              key={planType}
              plan={planType}
              price={price}
              yearly={yearly}
              checked={plan.type === planType}
              onClick={handlePlan}
            />
          );
        })}
      </fieldset>
      <PlansToggle onClick={toggleYear} yearly={yearly} />
    </FormContainer>
  );
}
