import { render, screen } from '@testing-library/react';
import Login from './Login';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Login />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});