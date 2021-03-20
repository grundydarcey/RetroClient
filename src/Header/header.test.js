import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

describe('Header smoke test', () => {
  it('Header component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});