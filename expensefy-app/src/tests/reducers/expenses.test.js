import expensesReducer from '../../reducers/expenses';
import {expenses} from "../fixtures/expenses";
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});


    expect(state).toEqual([]);
});


test('should remove expense by id', () => {
    const id = '1';
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});


test('should not remove expenses if id not found', () => {
    const id = '-1';
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 'id',
        description: 'test',
        note: '',
        createdAt: moment(0).valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);

});

test('should edit an expense', () => {
    const amount = 123;

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toBe(amount);
});


test('should not edit an expense if expense not found', () => {
    const amount = 123;

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

