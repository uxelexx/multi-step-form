import { formatPrice } from "@/helpers/formatPrice";
import FormContainer from "../FormContainer";
import FinishingAdds from "./FinishingAdds";
import FinishingPlan from "./FinishingPlan";
import FinishingTotal from "./FinishingTotal";

import { getEntries } from "@/helpers/getEntries";
import { useFinishing } from "./useFinishing";

export default function Finishing() {
  const { yearly, plan, someAddOns, toggle, planPrice, addons, totalPrice } =
    useFinishing();

  return (
    <FormContainer
      heading="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="text-indigo-950 flex flex-col bg-gray-100/60 px-5 py-6 rounded-xl">
        <FinishingPlan
          onClick={toggle}
          yearly={yearly}
          plan={plan.type}
          price={planPrice}
        />

        {someAddOns && <hr className="my-4" />}

        <div className="flex flex-col text-gray-400 space-y-4">
          {getEntries(addons).map(([name, add]) => (
            <FinishingAdds
              key={name}
              included={addons[name].included}
              heading={add.label}
              price={formatPrice(yearly, add.price)}
              yearly={yearly}
            />
          ))}
        </div>
      </div>
      <FinishingTotal total={totalPrice} yearly={yearly} />
    </FormContainer>
  );
}
