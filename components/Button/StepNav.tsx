import { finishForm, nextPage, prevPage } from "@/redux/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "./Button";

export function StepNav() {
  const form = useAppSelector((state) => state.formReducer);
  const dispatch = useAppDispatch();

  const isFirstStep = form.index === 0;
  const isLastStep = form.index === form.formSteps.length - 1;

  const next = () => dispatch(nextPage());
  const prev = () => dispatch(prevPage());
  const finish = () => dispatch(finishForm());

  if (isFirstStep) {
    return null;
  }

  return (
    <div className="flex flex-row-reverse mt-auto">
      {isLastStep ? (
        <Button onClick={finish}>Confirm</Button>
      ) : (
        <Button onClick={next}>Next step</Button>
      )}
      <Button onClick={prev} className="mr-auto" variant="secondary">
        Go back
      </Button>
      )
    </div>
  );
}
