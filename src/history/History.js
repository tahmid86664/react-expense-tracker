import React from "react";
import "./History.css";

const History = () => {
  return (
    <div className="history">
      <div className="history__header">
        <h3>History</h3>
      </div>
      <div className="history__body">
        <div className="history__item cash__add">
          <span>Cash</span>
          <span>+500</span>
        </div>
        <div className="history__item money__expense">
          <span>Book</span>
          <span>-40</span>
        </div>
        <div className="history__item money__expense">
          <span>Camera</span>
          <span>-200</span>
        </div>
      </div>
    </div>
  );
};

export default History;
