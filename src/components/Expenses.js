import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredData, setfilteredData] = useState("2020");
  const filteredDataHandler = (filteredValue) => {
    setfilteredData(filteredValue);
  };
  const filterYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredData;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredData}
          onSelection={filteredDataHandler}
        />
        <ExpenseList items={filterYear} />
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};
export default Expenses;
