import '@testing-library/jest-dom';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import FourOhFour from '../fourOhfour';
import ErrorImage from '../../../public/404.png';

afterEach(() => cleanup());
test('displays the error page', () => {
  const { queryByTestId } = render(<FourOhFour errorImage={ErrorImage} />);
  const img = queryByTestId('404-image');

  expect(img).toBeTruthy();
});
