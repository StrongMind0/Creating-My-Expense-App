import React from "react";

import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className="filter">
            <div className="expenses-filter">
                    <lable className="expenses-filter__label">Filter by year </lable>
                <select onChange={filterChangeHandler} value={props.selected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;