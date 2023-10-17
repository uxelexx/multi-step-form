import { countTotalPrice } from "@/helpers/countTotal";
import { formatPrice } from "@/helpers/formatPrice";
import FormContainer from "../FormContainer";
import FinishingAdds from "./FinishingAdds";
import FinishingPlan from "./FinishingPlan";
import FinishingTotal from "./FinishingTotal";

import { getEntries } from "@/helpers/getEntries";
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
