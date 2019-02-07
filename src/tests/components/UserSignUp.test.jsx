import React from 'react';
import { shallow } from 'enzyme';
import UserSignup from '../../components/presentational/UserSignup';


describe('Integration test for user sign up', () => {
  it('should render the sign up form for users', () => {
    const propObj = {
      onChange: () => {},
      onClick: () => {},
      disabled: true,
      errorMsg: 'user',
      email: 'jide.com',
      password: 'secret',
    };
    const wrapper = shallow(<UserSignup {...propObj} />);
    expect(wrapper.find('.container').length).toEqual(1);
    expect(wrapper.find('.middle-box').length).toEqual(1);
    expect(wrapper.find('.middle-box-body').length).toEqual(1);
    expect(wrapper.find('.middle-box-head').length).toEqual(1);
  });
});
