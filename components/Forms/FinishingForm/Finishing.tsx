import { countTotalPrice } from "@/helpers/countTotal";
import { formatPrice } from "@/helpers/formatPrice";
import { type AddonType } from "@/types";
import FormContainer from "../FormContainer";
import FinishingAdds from "./FinishingAdds";
import FinishingPlan from "./FinishingPlan";
import FinishingTotal from "./FinishingTotal";

import { toggleYearly } from "@/redux/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Finishing() {
  const dispatch = useAppDispatch();
  const addons = useAppSelector(state => state.addonsReducer);
  const plan = useAppSelector(state => state.planReducer);
  const { yearly } = useAppSelector(state => state.formReducer);

  const { service, storage, profile } = addons;

  const toggle = () => dispatch(toggleYearly());

  const someAddOns = storage.included || profile.included || service.included;
  const totalPrice = countTotalPrice(plan[plan.type], addons);

  const planPrice = formatPrice(yearly, plan[plan.type]);

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
          {Object.entries(addons).map(([name, add]) => {
            const price = formatPrice(yearly, add.price);

            return (
              <FinishingAdds
                key={name}
                included={addons[name as AddonType].included}
                heading={add.label}
                price={price}
                yearly={yearly}
              />
            );
          })}
        </div>
      </div>
      <FinishingTotal total={totalPrice} yearly={yearly} />
    </FormContainer>
  );
}
