import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ButtonAdd from "./components/ButtonAdd";
function App() {
    return (
        <div className="App">
            {/* <h1>Expense App</h1> */}
            <ButtonAdd />
            <ExpenseList />
        </div>
    );
}
export default App;
