import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from './test-utils';
import userEvent from '@testing-library/user-event';

test('full app rendering/navigating', () => {
  renderWithRouter(<App />)
  expect(screen.getByText(/Välkommen till Dunderduffarna/i)).toBeInTheDocument()

  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/Profil/i), leftClick)

  expect(screen.getByText(/Profile/i)).toBeInTheDocument()
})