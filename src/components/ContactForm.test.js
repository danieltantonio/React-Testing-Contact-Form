import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

test("Renders ContactForm without crashing", async () => {
  render(<ContactForm />)
});

test("Can type information into Contact Form and Submit", () => {
  render(<ContactForm />)
// Type into input fields and click submit
// 1.) Query for all inputs
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/Message/i);
// 2.) Run the change event to add text
  fireEvent.change(firstNameInput, { target: { value: 'Dan' } });
  fireEvent.change(lastNameInput, { target: { value: 'Antonio' } });
  fireEvent.change(emailInput, { target: { value: 'danieltomantonio@gmail.com' } });
  fireEvent.change(messageInput, { target: { value: 'Bruh' } });
// Click Submit button
// 1.) Query Submit button
// 2.) Run the click event on the button
  const submitButton = screen.queryByTestId(/submit/i);
    
  act(() => {
    fireEvent.click(submitButton)
  })
// Assert that the person is being rendered into state.
//   const newPerson = screen.getByText(/firstName/i);
//   expect(newPerson).toBeInTheDocument();
})