import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const getNewExpenseData = (enteredExpenseData) => {           
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            }
            props.onAddExpense(expenseData);

    }
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveForm={ getNewExpenseData } />
        </div>
    );
}

export default NewExpense;