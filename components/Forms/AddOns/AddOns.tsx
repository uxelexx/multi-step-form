import { type AddonType } from "@/types";
import { type ChangeEvent } from "react";
import FormContainer from "../FormContainer";
import AddOnsBox from "./AddOnsCard";

import { formatPrice } from "@/helpers/formatPrice";
import { setAddons } from "@/redux/features/addonsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function AddOns() {
  const dispatch = useAppDispatch();
  const addons = useAppSelector(state => state.addonsReducer);
  const { yearly } = useAppSelector(state => state.formReducer);

  function handleAddOns(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setAddons(e.target.name as AddonType));
  }

  return (
    <FormContainer
      heading="Pick add-ons"
      description="Add-ons help enchance your gaming experience."
    >
      <fieldset className="flex flex-col flex-1 lg:space-y-5 space-y-3">
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
              checked={addons[add as AddonType].included}
              onChange={handleAddOns}
            />
          );
        })}
      </fieldset>
    </FormContainer>
  );
}
