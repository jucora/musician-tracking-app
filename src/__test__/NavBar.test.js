import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';

import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
