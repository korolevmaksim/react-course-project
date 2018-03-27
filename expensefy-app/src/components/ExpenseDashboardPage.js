import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummory from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummory />
        <ExpenseListFilters/>
        <ExpenseList />
    </div>
);


export default ExpenseDashboardPage;