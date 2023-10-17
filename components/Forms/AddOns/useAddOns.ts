import { setAddons } from "@/redux/features/addonsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { AddonType } from "@/types";
import type { ChangeEvent } from "react";

export function useAddOns() {
  const dispatch = useAppDispatch();
  const addons = useAppSelector(state => state.addonsReducer);
  const { yearly } = useAppSelector(state => state.formReducer);

  function handleAddOns(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setAddons(e.target.name as AddonType));
  }

  return {
    addons,
    yearly,
    handleAddOns,
  };
}
