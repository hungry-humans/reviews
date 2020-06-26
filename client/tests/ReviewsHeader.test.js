import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ReviewsHeader from '../components/ReviewsHeader.jsx';

describe('ReviewsHeader', () => {
  it('contains SearchAndSort Components and their child components', () => {
    const wrapper = mount(<ReviewsHeader />);

    expect(wrapper.exists('.search-and-sort')).toBe(true);
    expect(wrapper.exists('.search-bar')).toBe(true);
    expect(wrapper.exists('.sort-bar')).toBe(true);
  });

  it('contains ExampleAndWrite Components and their child components', () => {
    const wrapper = mount(<ReviewsHeader />);

    expect(wrapper.exists('.example-and-write')).toBe(true);
    expect(wrapper.exists('.example-box')).toBe(true);
    expect(wrapper.exists('.write-box')).toBe(true);
  });
});