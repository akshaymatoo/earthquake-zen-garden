// app.test.js
import { cleanup, render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import App from './App';

afterEach(() => cleanup());

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  const { queryByTitle } = render(
    <Router history={history}>
      <App />
    </Router>,
  );
  const table = queryByTitle('main-table');
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(table).toBeTruthy();
});
