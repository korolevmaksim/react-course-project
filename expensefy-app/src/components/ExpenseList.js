import React from 'react';
import {connect} from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.expenses.map((expense) => {
            return (
                <ExpenseListItem key={expense.id} {...expense}/>
            );
        })}
        <br/>
    </div>
);



const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);


