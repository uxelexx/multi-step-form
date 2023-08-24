import Button from "@/components/Button/Button";
import { nextPage } from "@/redux/features/formSlice";
import {
    updatePerson,
    type PersonalInfoKeys,
} from "@/redux/features/personSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { type ChangeEvent } from "react";
import FormContainer from "../FormContainer";
import { Input } from "./Input";

export default function PersonalInfo() {
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
    dispatch(nextPage());
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
