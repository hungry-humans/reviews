import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it ('should work', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it ('should still work', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome!');
  });
});