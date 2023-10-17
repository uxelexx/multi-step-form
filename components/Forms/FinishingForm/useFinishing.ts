import { countTotalPrice } from "@/helpers/countTotal";
import { formatPrice } from "@/helpers/formatPrice";
import { toggleYearly } from "@/redux/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function useFinishing() {
  const dispatch = useAppDispatch();
  const addons = useAppSelector(state => state.addonsReducer);
  const plan = useAppSelector(state => state.planReducer);
  const { yearly } = useAppSelector(state => state.formReducer);
  const { service, storage, profile } = addons;

  const toggle = () => dispatch(toggleYearly());

  const someAddOns = storage.included || profile.included || service.included;

  const totalPrice = countTotalPrice(plan[plan.type], addons);
  const planPrice = formatPrice(yearly, plan[plan.type]);

  return {
    someAddOns,
    totalPrice,
    planPrice,
    toggle,
    yearly,
    plan,
    addons,
  };
}
