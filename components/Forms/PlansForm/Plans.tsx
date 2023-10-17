import { formatPrice } from "@/helpers/formatPrice";
import { getEntries } from "@/helpers/getEntries";
import FormContainer from "../FormContainer";
import PlanOption from "./PlanOption";
import PlansToggle from "./PlansToggle";
import { usePlans } from "./usePlans";

export default function Plan() {
  const { plan, yearly, toggleYear, handlePlan } = usePlans();

  return (
    <FormContainer
      heading="Select your plan"
      description="You have the option of montly or yearly billing"
    >
      <fieldset
        role="radiogroup"
        className="flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-5 mb-5"
      >
        {getEntries(plan).map(([planType, cost]) => {
          if (planType === "type") return;

          return (
            <PlanOption
              key={planType}
              plan={planType}
              price={formatPrice(yearly, cost)}
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
