import React from 'react';
import ReactDOM from 'react-dom';
import Today from './today';

describe('Today smoke component', () => {
  it('Today component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Today />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});