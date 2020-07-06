import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../componant/Header/Header';

describe('<App/>', () => {
  it('is alive at application start', () => {
    let app = shallow(<Header />);
    expect(app.find('p').exists()).toBeTruthy();
  });

});