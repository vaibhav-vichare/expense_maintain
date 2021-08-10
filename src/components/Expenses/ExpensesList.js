import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {


    if (props.items.length === 0) {
        return <p className="no-data-message">No expenses found</p>;
    }
    return ( 
        <ul>
        {props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
        )}
        </ul>
    )
}

export default ExpensesList;