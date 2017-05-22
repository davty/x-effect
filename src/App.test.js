import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('displays a table with correct amount of cells', () => {
  const app = mount(<App />);
  expect(app.find('td')).to.have.length(28);
});
