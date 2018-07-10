import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 15000, createdAt: 1000}));
store.dispatch(addExpense({ description: 'rent', amount: 180000, createdAt: 500}));
store.dispatch(addExpense({ description: 'internet', amount: 6000, createdAt: 1500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const App = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(App, document.getElementById('app'));