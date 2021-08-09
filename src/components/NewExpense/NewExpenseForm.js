    import React, { useState } from 'react';
    import './NewExpenseForm.css';

    const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [enteredInputs, setEnteredInputs] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setEnteredInputs((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
        // console.log(enteredInputs);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setEnteredInputs({
        //     ...enteredInputs,
        //     enteredAmount: event.target.value
        // });
        // console.log(enteredInputs);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setEnteredInputs({
        //     ...enteredInputs,
        //     enteredDate: event.target.value
        // });
        // console.log(enteredInputs);
    }

    const submitHandler = (event) => {
            event.preventDefault();
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }

            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
            
            props.onSaveForm(expenseData);
    }

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={ enteredTitle } onChange={ titleChangeHandler } />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={ enteredAmount } onChange={ amountChangeHandler } />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2010-01-01" max="2022-31-12" value={ enteredDate } onChange={ dateChangeHandler } />
            </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
            </div>
        </form>
    );
    }

    export default NewExpenseForm;