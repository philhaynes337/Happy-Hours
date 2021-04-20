import { render, screen } from '@testing-library/react';
import About from './About';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <About />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});