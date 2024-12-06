import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './fooot';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders copyright text with current year', () => {
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`Copyright © Your Website ${currentYear}`));
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders all footer links', () => {
    const privacyLink = screen.getByText(/Privacy Policy/i);
    const termsLink = screen.getByText(/Terms of Service/i);
    const contactLink = screen.getByText(/Contact Us/i);

    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    const socialIcons = screen.getAllByRole('link');
    // We expect 6 links: 3 footer links + 3 social media icons
    expect(socialIcons).toHaveLength(6);
  });

  test('all links have correct styling classes', () => {
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('text-white');
    });
  });
});
