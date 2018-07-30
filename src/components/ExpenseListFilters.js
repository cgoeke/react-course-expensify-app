import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';

export class ExpenseListFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: null
        }

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    };

    onDatesChange({ startDate, endDate }) {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange(focused) {
        this.setState(() => ({ focused }));
    };

    render() {
      return (
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              <input 
                type="text" 
                className="text-input"
                placeholder="Search Expenses"
                value={this.props.filters.text}
                onChange={(e) => {
                  this.props.setTextFilter(e.target.value);
                }} 
              />
            </div>
            <div className="input-group__item">
              <select
                className="select"
                value={this.props.filters.sortBy}
                onChange={(e) => {
                  e.target.value === 'date' ?
                    this.props.sortByDate(e.target.value) :
                    this.props.sortByAmount(e.target.value)
                }}
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div className="input-group__item">
              <DateRangePicker 
                startDateId='start'
                startDate={this.props.filters.startDate}
                endDateId='end'
                endDate={this.props.filters.endDate} 
                onDatesChange={this.onDatesChange}                
                focusedInput={this.state.focused} 
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </div>
          </div>
        </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);