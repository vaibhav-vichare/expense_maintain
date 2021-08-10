import React, {useState} from 'react';
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

    const [showForm, setFormVisibility] = useState(false);

    const showFormHandler = () => {
        setFormVisibility(true);
    }

    const cancelAddExpense = (value) => {
        setFormVisibility(value);
    }

    return (
        <div className="new-expense">
            {
                showForm ? <NewExpenseForm onCancelAddExpense={cancelAddExpense} onSaveForm={ getNewExpenseData } /> : <button onClick={showFormHandler}> Add new expense </button>
            }
        </div>
    );
}

export default NewExpense;