import React from 'react';
import { shallow } from 'enzyme'; 
import  { LoginPage }   from '../../components/LoginPage';
let wrapper;
beforeEach(() => {
      wrapper= shallow(<LoginPage
                         xmlns="http://www.w3.org/1999/xhtml" />);
});

test('should render login page',() => {
     expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
      const startLogin = jest.fn();
      const wrapper = shallow(<LoginPage startLogin={startLogin} xmlns="http://www.w3.org/1999/xhtml"/>);
      wrapper.find('button').simulate('click');
      expect(startLogin).toHaveBeenCalled();
 });