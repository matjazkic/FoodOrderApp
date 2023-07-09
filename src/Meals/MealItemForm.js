import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../Components/UI/Input";

const MealItemForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className={classes.form}>
      <Input
        label="Amount "
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;