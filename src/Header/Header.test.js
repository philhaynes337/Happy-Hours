import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Header />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});