const demoStore = {
    expenses: [{
        id: 'ssalgkh',
        description: 'rent',
        note: 'Jan rent',
        amount: 180000,
        createdAt: 0        
    }],
    filters: {
        text: undefined,
        sortBy: undefined,
        startDate: undefined,
        endDate: undefined
    }
};


// Testing
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 1000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 250, createdAt: -1000}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));