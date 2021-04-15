import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react';
import ReactDOM from 'react-dom';

it('Renders without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Footer />, 
  div
  );
  ReactDOM.unmountComponentAtNode(div);
});