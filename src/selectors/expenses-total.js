
const selectExpensesTotal = (expenses = []) => {
    return expenses.reduce((sum, { amount }) => sum + amount, 0 );
};

export default selectExpensesTotal;