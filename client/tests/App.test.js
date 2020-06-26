import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';

describe('App', () => {
  it ('should contain header and list components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('#reviews-header').exists()).toBe(true);
    expect(wrapper.find('#reviews-list').exists()).toBe(true);
  });
});