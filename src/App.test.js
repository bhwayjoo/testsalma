import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders welcome message', () => {
    const headingElement = screen.getByText(/Welcome to My App/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders hello world message', () => {
    const messageElement = screen.getByText(/Hello World!/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('contains main content section', () => {
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('contains header section', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('includes Footer component', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });
});
