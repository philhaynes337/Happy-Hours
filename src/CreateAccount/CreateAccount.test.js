import { render, screen } from '@testing-library/react';
import CreateAccount from './CreateAccount';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <CreateAccount />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});