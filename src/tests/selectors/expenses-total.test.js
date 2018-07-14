import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('returns 0 if no expenses provided', () => {
    const result = selectExpensesTotal();
    expect(result).toBe(0);
});

test('adds up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(100);
});

test('adds total of multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(600);
});