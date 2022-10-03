import React from "react";

import ExpensesItem from "./ExpensesItem"
import './ExpensesList.css'

const ExpenseList = props => {

    if (props.items.length === 0) {
        return <p className="no-expenses">No Expenses Found </p> 
    }

    return <div>

        {/* {props.items.length === 0 && <p className="no-expenses">No Expenses Found </p>} */}

        {props.items.map(expenses => (
                <ExpensesItem
                    key={expenses.id}
                    title={expenses.title}
                    amount={expenses.amount} 
                    date={expenses.date}
                    />
            ))}
    </div>
}


export default ExpenseList;
