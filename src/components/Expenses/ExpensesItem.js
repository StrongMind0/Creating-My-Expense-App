import React from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import './ExpensesItem.css'

const ExpensesItem = (props) => {

    return (
        <div className="expenses-item">
            <ExpenseDate date={props.date} />
            
            <div className="expenses-item__details">
                <h2>{props.title}</h2>
                <div className="expenses-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpensesItem