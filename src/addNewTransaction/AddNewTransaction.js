import React, { useContext, useState } from "react";
import "./AddNewTransaction.css";

import { GlobalContext } from "../context/GlobalState";

const AddNewTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    });

    setText("");
    setAmount(0);
  };

  return (
    <div className="addNewTransaction">
      <div className="addNewTransaction__header">
        <h3>Add new transaction</h3>
      </div>
      <div className="addNewTransaction__body">
        <form onSubmit={handleSubmit}>
          <span>text</span>
          <input
            type="text"
            placeholder="please enter title"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <span>
            amount <br /> (Negative-Expense, Positive-Income)
          </span>
          <input
            type="number"
            placeholder="please enter amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button>Add transaction</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTransaction;
