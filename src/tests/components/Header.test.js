import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

test('renders Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});

test('calls startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});