import React from 'react';
import ReactDOM from 'react-dom';
import CheckDates from './checkdates';

describe('Check smoke component', () => {
  it('Check dates component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckDates />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});