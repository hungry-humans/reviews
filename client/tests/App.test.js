import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';

describe('App', () => {


  it ('should contain Welcome', () => {
    const wrapper = shallow(<App />);

  });
});