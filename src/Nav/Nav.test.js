import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Nav />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});