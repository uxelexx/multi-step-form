import FormContainer from "../FormContainer";
import { Input } from "./Input";
import { usePersonalInfo } from "./usePeronalInfo";

export default function PersonalInfo() {
  const { handleSubmit, handleInputs, userName, userEmail, userPhone } =
    usePersonalInfo();

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
      </form>
    </FormContainer>
  );
}
