import React from "react";
import AddNewTransaction from "./addNewTransaction/AddNewTransaction";
import "./App.css";
import Balance from "./balance/Balance";
import Header from "./header/Header";
import History from "./history/History";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Balance />
        <History />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
