import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('App renders', () => {
  render(<App />);
});
