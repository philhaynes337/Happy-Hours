import { render, screen } from '@testing-library/react';
import HappyHours from './HappyHours';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <HappyHours />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});