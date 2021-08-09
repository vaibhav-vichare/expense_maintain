import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setNewExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = (newExpense) => {
      setNewExpenses((prevState) => {
        return [newExpense, ...prevState];
      })
  }

  return (
    <div>
      <div className="heading">First React App</div>
      <NewExpense onAddExpense= { addNewExpense } />
        <div>
          <Expenses items={expenses} />
        </div>
   </div>
  );
}

export default App;
