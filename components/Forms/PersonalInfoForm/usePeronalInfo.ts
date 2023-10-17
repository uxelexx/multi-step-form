import { nextPage } from "@/redux/features/formSlice";
import { updatePerson } from "@/redux/features/personSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { PersonalInfoField } from "@/types";
import type { ChangeEvent, FormEvent } from "react";

export function usePersonalInfo() {
  const { userName, userEmail, userPhone } = useAppSelector(
    state => state.personReducer,
  );
  const dispatch = useAppDispatch();

  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as PersonalInfoField;
    const value = e.target.value;

    dispatch(updatePerson({ name, value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(nextPage());
  }

  return {
    userName,
    userEmail,
    userPhone,
    handleInputs,
    handleSubmit,
  };
}
