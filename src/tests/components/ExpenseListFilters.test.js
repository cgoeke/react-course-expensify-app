import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});

test('renders ExpenseListFilters component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('renders ExpenseListFilters with alt data', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('handles text change', () => {
    const value = 'test text';
    wrapper.find('input').simulate('change', { 
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('sorts by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('sorts by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('handles on date change', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(7, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('handles on focus change', () => {
    const focused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
    expect(wrapper.state('focused')).toEqual(focused);
});