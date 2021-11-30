import React from 'react';
import { render, screen } from '@testing-library/react';
import ClubHousePicker from '../ClubHousePicker';

test('renders clubhouse options', () => {
  render(<ClubHousePicker />);
  const clubhouseElement = screen.getByTestId("clubhouse-picker");
  expect(clubhouseElement).toBeInTheDocument();
});
