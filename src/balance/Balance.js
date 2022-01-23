import React, { useContext, useEffect, useState } from "react";
import "./Balance.css";

import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    setTotal(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));

    const incomes = amounts.filter((amount) => amount > 0);
    setTotalIncome(incomes.reduce((acc, item) => (acc += item), 0).toFixed(2));

    const expenses = amounts.filter((amount) => amount < 0);
    setTotalExpense(
      expenses.reduce((acc, item) => (acc += item), 0).toFixed(2)
    );
  }, [transactions]);

  return (
    <div className="balance">
      <div className="balance__top">
        <h3>Your Balance</h3>
        <span className="balance__remaining">TK {total}</span>
      </div>
      <div className="balance__bottom">
        <div className="bottom__left">
          <h3>Income</h3>
          <span className="income">TK {totalIncome}</span>
        </div>
        <div className="bottom__right">
          <h3>Expense</h3>
          <span className="expense">TK {-1 * totalExpense}</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
