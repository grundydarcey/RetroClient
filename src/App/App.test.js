/* eslint-disable no-sequences */
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders App name', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Retrodate/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { BrowserRouter as Router } from 'react-router-dom';

describe('Smoke test', () => {
  it('App component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})