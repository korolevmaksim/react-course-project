import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import uuid from 'uuid';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    id: uuid(),
    description: 'Water bill',
    amount: 100,
    createdAt: 4000
}));

store.dispatch(addExpense({
    id: uuid(),
    description: 'Gas bill',
    amount: 200,
    createdAt: 2000
}));

store.dispatch(addExpense({
    id: uuid(),
    description: 'Rent',
    amount: 500,
    createdAt: 3000
}));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
