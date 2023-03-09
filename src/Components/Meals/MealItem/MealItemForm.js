import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amtIsValid, setAmtIsValid] = useState(true);
  const cartAmountRef = useRef();
  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = cartAmountRef.current.value;
    const enteredAmountNumber = +cartAmountRef.current.value;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmtIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref = {cartAmountRef}
        label="Amount"
        input={{
          id: "Amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amtIsValid && <p>Amount is Incorrect. Please enter Correct Value (between 0 to 5)</p>}
    </form>
  );
};

export default MealItemForm;
