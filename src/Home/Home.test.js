import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Home />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});