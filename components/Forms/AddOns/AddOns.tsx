import { useForm } from "@/context/form-context";
import { ChangeEvent } from "react";
import FormContainer from "../FormContainer";
import AddOnsBox from "./AddOnsCard";

import { setAddons, type AddonsKeys } from "@/redux/features/addonsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { formatPrice } from "@/helpers/formatPrice";

export default function AddOns() {
  const dispatch = useAppDispatch();
  const addons = useAppSelector((state) => state.addonsReducer);
  const { yearly } = useAppSelector((state) => state.formReducer);

  function handleAddOns(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setAddons(e.target.name as AddonsKeys));
  }

  return (
    <FormContainer
      heading="Pick add-ons"
      description="Add-ons help enchance your gaming experience."
    >
      <fieldset className="flex flex-col flex-1 space-y-5">
        {Object.entries(addons).map(([add, value]) => {
          const { label, description, price } = value;
          const formatedPrice = formatPrice(yearly, price);

          return (
            <AddOnsBox
              label={label}
              key={add}
              price={formatedPrice}
              description={description}
              name={add}
              checked={addons[add as AddonsKeys].included}
              onChange={handleAddOns}
            />
          );
        })}
      </fieldset>
    </FormContainer>
  );
}
