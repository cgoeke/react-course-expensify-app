import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses'; 
import expensesReducer from "../../reducers/expenses";

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };        
    });

    database.ref('expenses').set(expensesData).then(() => done());
});

test('sets default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('removes expense by id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1234'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('adds expense', () => {
    const expense = {
        id: '4',
        description: 'test 4 description',
        note: '',
        amount: 1000,
        createdAt: 50
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('edits expense by id', () => {
    const description = 'edited test description';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description);
});

test('should not edit expense if id not found', () => {
    const description = 'edited test description';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '7',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('sets expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});