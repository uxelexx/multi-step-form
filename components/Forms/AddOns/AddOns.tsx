import { formatPrice } from "@/helpers/formatPrice";
import { getEntries } from "@/helpers/getEntries";
import FormContainer from "../FormContainer";
import AddOnsBox from "./AddOnsCard";
import { useAddOns } from "./useAddOns";

export default function AddOns() {
  const { addons, yearly, handleAddOns } = useAddOns();

  return (
    <FormContainer
      heading="Pick add-ons"
      description="Add-ons help enchance your gaming experience."
    >
      <fieldset className="flex flex-col flex-1 lg:space-y-5 space-y-3">
        {getEntries(addons).map(([add, { label, description, price }]) => (
          <AddOnsBox
            label={label}
            key={add}
            price={formatPrice(yearly, price)}
            description={description}
            name={add}
            checked={addons[add].included}
            onChange={handleAddOns}
          />
        ))}
      </fieldset>
    </FormContainer>
  );
}
