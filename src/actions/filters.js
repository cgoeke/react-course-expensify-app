// Sets text filter
export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
};

// Sets sortBy amount filter
export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
};

// Sets sortBy date filter
export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
};

// Sets start date
export const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
};

// Sets end date
export const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }  
};
