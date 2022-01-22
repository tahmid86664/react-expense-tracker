import React from "react";
import "./Balance.css";

const Balance = () => {
  return (
    <div className="balance">
      <div className="balance__top">
        <h3>Your Balance</h3>
        <span className="balance__remaining">$260.00</span>
      </div>
      <div className="balance__bottom">
        <div className="bottom__left">
          <h3>Income</h3>
          <span className="income">$500.00</span>
        </div>
        <div className="bottom__right">
          <h3>Expense</h3>
          <span className="expense">$240.00</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
