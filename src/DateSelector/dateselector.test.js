import React from 'react';
import ReactDOM from 'react-dom';
import DateSelector from './dateselector'

describe('Select smoke component', () => {
  it('Select component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateSelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});