import React, {useState} from "react";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expense.css'

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filteredYearHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    
    
    return (
        <div className="expense">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filteredYearHandler}
            />

            <ExpensesChart expenses={filteredExpenses}/>

            <ExpenseList items={filteredExpenses} />
            

        </div>
    );
}

export default Expense;