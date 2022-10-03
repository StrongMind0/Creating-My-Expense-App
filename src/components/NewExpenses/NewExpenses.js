import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css'

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false)


    const saveExpenseHandler = (newExpense) => {
        const expenseData = {
            id: Math.random().toString(),
            ...newExpense
        };

        props.onAddExpense(expenseData);
    }


    const startIsEditingHandler = () => {
        setIsEditing(true);
    }


    const stopIsEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expenses">
            {!isEditing && <button type="submit" onClick={startIsEditingHandler}> Add New Expense </button>}

            {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopIsEditingHandler} />}
        </div>
    )
};

export default NewExpenses