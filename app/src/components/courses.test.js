import React from 'react';
import { render } from '@testing-library/react';
import Courses from './courses.component';

it('renders list of courses', async () => {
  const { findByText } = render(<Courses />);
  const listElement = await findByText(/author/i);
  expect(listElement).toBeInTheDocument();
});
