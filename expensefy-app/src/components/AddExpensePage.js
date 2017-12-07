import React from 'react';
import ExpenseForms from './ExpenseForm';
import { connect } from 'react-redux';
import {addExpense} from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForms
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);



export default connect()(AddExpensePage);
