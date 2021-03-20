import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landingpage';

describe('Landing smoke test', () => {
  it('Landing page component renders without crashing', () => {
    const div = document.createElementcreateElement('div');
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});