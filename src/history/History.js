import React, { useContext } from "react";
import "./History.css";

import { GlobalContext } from "../context/GlobalState";

const History = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="history">
      <div className="history__header">
        <h3>Transactions</h3>
      </div>
      <div className="history__body">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`history__item ${
              transaction.amount > 0 ? "cash__add" : "money__expense"
            }`}
          >
            <div
              className="history__delete"
              onClick={() => deleteTransaction(transaction.id)}
            >
              <div className="cross">
                <span className="cross1"></span>
                <span className="cross2"></span>
              </div>
            </div>
            <span>{transaction.text}</span>
            <span>{transaction.amount}/-</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
