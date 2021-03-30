import React from 'react';
import { shallow } from 'enzyme';
import FourOhFour from '../fourOhfour';

describe('404', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FourOhFour errorImage="" />);

    expect(wrapper).toBeTruthy();
  });
});
