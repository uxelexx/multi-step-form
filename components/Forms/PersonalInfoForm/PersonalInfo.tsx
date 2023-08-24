import Button from "@/components/Button/Button";
import { useForm } from "@/context/form-context";
import { nextStep } from "@/helpers/uitls";
import { ChangeEvent } from "react";
import FormContainer from "../FormContainer";
import { Input } from "./Input";

import { PersonalInfoKeys, updatePerson } from "@/redux/features/personSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function PersonalInfo() {
  const { setForm, lastPage } = useForm();
  const { userName, userEmail, userPhone } = useAppSelector(
    (state) => state.personReducer,
  );
  const dispatch = useAppDispatch();

  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as PersonalInfoKeys;
    const value = e.target.value;

    dispatch(updatePerson({ name, value }));
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    nextStep(lastPage, setForm);
  }

  return (
    <FormContainer
      heading="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="flex flex-col space-y-6">
          <Input
            autoFocus
            min={5}
            label="Name"
            type="text"
            name="userName"
            placeholder="John Doe"
            value={userName}
            onChange={handleInputs}
          />
          <Input
            label="Email address"
            name="userEmail"
            type="email"
            placeholder="some@mail.com"
            value={userEmail}
            onChange={handleInputs}
          />
          <Input
            label="Phone number"
            name="userPhone"
            placeholder="+1 234 567 890"
            type="tel"
            value={userPhone}
            onChange={handleInputs}
          />
        </div>
        <Button type="submit" className="mt-auto ml-auto">
          Next step
        </Button>
      </form>
    </FormContainer>
  );
}
