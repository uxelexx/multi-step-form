import {
    finishForm,
    lastPage,
    nextPage,
    prevPage,
} from "@/redux/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "./Button";

export function StepNav() {
  const { index } = useAppSelector((state) => state.formReducer);
  const dispatch = useAppDispatch();

  const isFirstStep = index === 0;

  const next = () => dispatch(nextPage());
  const prev = () => dispatch(prevPage());
  const finish = () => dispatch(finishForm());

  if (isFirstStep) {
    return null;
  }

  return (
    <div className="flex flex-row-reverse mt-auto">
      {lastPage ? (
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
