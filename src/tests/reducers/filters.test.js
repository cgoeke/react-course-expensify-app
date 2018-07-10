import moment from 'moment';
import filtersReducer from "../../reducers/filters";

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).startOf('month'),
    endDate: moment(0).endOf('month')
}

test('sets up default filter values', () => {
    const state = filtersReducer(filtersReducerDefaultState, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0).startOf('month'),
        endDate: moment(0).endOf('month')
    });
});

test('sets text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test text' });
    expect(state.text).toBe('test text');
});

test('sets sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('sets sortBy to date', () => {
    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('sets startDate filter', () => {
    const action = { type: 'SET_START_DATE', startDate: moment(0).startOf('month') };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(action.startDate);
});

test('sets endDate filter', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(0).endOf('month') };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(action.endDate);
});

