import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test("Renders ContactForm without crashing", () => {
  render(<ContactForm />)
});

test("Can type information into Contact Form and Submit", () => {
  render(<ContactForm />)
// Type into input fields and click submit
// 1.) Query for all inputs
  const fistNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/Message/i);
// 2.) Run the change event to add text
// Click Submit button
// 1.) Query Submit button
// 2.)
})