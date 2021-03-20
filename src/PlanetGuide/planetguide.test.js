import React from 'react';
import ReactDOM from 'react-dom';
import PlanetGuide from './planetguide';

describe('Guide smoke component', () => {
  it('Planet component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlanetGuide />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})