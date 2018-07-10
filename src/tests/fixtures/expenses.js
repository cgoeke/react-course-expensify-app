import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'test description 1',
    note: 'test note 1',
    amount: 100,
    createdAt: 0 
}, {
    id: '2',
    description: 'test description 2',
    note: 'test note 2',
    amount: 200,
    createdAt: moment(0).add(7, 'days').valueOf() 
}, {
    id: '3',
    description: 'test description 3',
    note: 'test note 3',
    amount: 300,
    createdAt: moment(0).subtract(30, 'days').valueOf()
}];

export default expenses;