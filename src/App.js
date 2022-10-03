import React,{useState} from 'react';

import NewExpense from './components/NewExpenses/NewExpenses';
import Expense from './components/Expenses/Expense';
import './App.css';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'New Tv',
    amount: '799.49',
    date: new Date(2021, 3, 12),
  },

  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 541.2,
    date: new Date(2021, 2, 31),
  },

  {
    id: 'e3',
    title: 'Gas Cook',
    amount: 312.4,
    date: new Date(2021, 4, 31),
  },

  {
    id: 'e4',
    title: 'Stove',
    amount: 291.4,
    date: new Date(2020, 2, 31),
  },

];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses)
  
  const addExpenseHandler = inputExpense => {
    setExpenses(prevExpense => {
      return [inputExpense, ...prevExpense]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;