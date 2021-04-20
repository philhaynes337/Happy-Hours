import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';



it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Nav />
  </BrowserRouter>, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});