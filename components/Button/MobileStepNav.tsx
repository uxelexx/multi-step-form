import { finishForm, nextPage, prevPage } from "@/redux/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "./Button";

export function MobileStepNav() {
  const form = useAppSelector(state => state.formReducer);
  const dispatch = useAppDispatch();

  const isFirstStep = form.index === 0;
  const isLastStep = form.index === form.formSteps.length - 1;

  const next = () => dispatch(nextPage());
  const prev = () => dispatch(prevPage());
  const finish = () => dispatch(finishForm());

  return (
    <div className="flex absolute bottom-0 left-0 flex-row-reverse bg-white w-full md:hidden p-4">
      {isLastStep ? (
        <Button onClick={finish}>Confirm</Button>
      ) : (
        <Button onClick={next}>Next step</Button>
      )}
      {!isFirstStep && (
        <Button onClick={prev} className="mr-auto" variant="secondary">
          Go back
        </Button>
      )}
      )
    </div>
  );
}
