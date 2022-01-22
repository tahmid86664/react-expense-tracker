import React from "react";
import "./AddNewTransaction.css";

const AddNewTransaction = () => {
  return (
    <div className="addNewTransaction">
      <div className="addNewTransaction__header">
        <h3>Add new transaction</h3>
      </div>
      <div className="addNewTransaction__body">
        <form>
          <span>text</span>
          <input type="text" placeholder="please enter title" />
          <span>
            amount <br /> (Negative-Expense, Positive-Income)
          </span>
          <input type="number" placeholder="please enter amount" />
          <button>Add transaction</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTransaction;
