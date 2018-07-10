import moment from 'moment';
import getVisibleExpenses from "../../selectors/expenses";
import expenses from '../fixtures/expenses';

test('filters text by value', () => {
    const filters = {
        text: '2',
        sortBy: 'date',
        startDate: undefined, 
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1]]);
});

test('filters by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0), 
        endDate: undefined
    };
    
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0]]);
});

test('filters by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined, 
        endDate: moment(0)
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('sorts by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined, 
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('sorts by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});