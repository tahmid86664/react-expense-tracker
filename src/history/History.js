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
          <div className="history__delete">
            <div className="cross">
              <span className="cross1"></span>
              <span className="cross2"></span>
            </div>
          </div>
          <span>Cash</span>
          <span>+500</span>
        </div>
        <div className="history__item money__expense">
          <div className="history__delete">
            <div className="cross">
              <span className="cross1"></span>
              <span className="cross2"></span>
            </div>
          </div>
          <span>Book</span>
          <span>-40</span>
        </div>
        <div className="history__item money__expense">
          <div className="history__delete">
            <div className="cross">
              <span className="cross1"></span>
              <span className="cross2"></span>
            </div>
          </div>
          <span>Camera</span>
          <span>-200</span>
        </div>
      </div>
    </div>
  );
};

export default History;
