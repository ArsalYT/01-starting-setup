import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
const NewExpenses = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const expenseHandler = (expense) => {
    const expenseObj = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseObj);
    setisEditing(false);
  };

  const startEditingHandler = () => {
    setisEditing(true);
  };
  const stopEditingHandler = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSubmitExpense={expenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
