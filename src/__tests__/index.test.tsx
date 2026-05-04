import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
  it('renders the hero heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Zero-dependency E2E testing');
  });

  it('renders the install command', () => {
    render(<Home />);
    expect(screen.getByText(/npm install --save-dev stowaway/)).toBeInTheDocument();
  });

  it('Get Started CTA links to getting-started doc', () => {
    render(<Home />);
    const cta = screen.getAllByRole('link').find(l => l.textContent?.includes('Get Started'));
    expect(cta).toHaveAttribute('href', '/docs/getting-started');
  });

  it('renders 3 how-it-works steps', () => {
    render(<Home />);
    expect(screen.getByText('Connect')).toBeInTheDocument();
    expect(screen.getByText('Find')).toBeInTheDocument();
    expect(screen.getByText('Interact')).toBeInTheDocument();
  });

  it('renders all 6 feature cards', () => {
    render(<Home />);
    expect(screen.getByText('Zero dependencies')).toBeInTheDocument();
    expect(screen.getByText('iOS + Android')).toBeInTheDocument();
    expect(screen.getByText('Full TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Works with any Hermes app')).toBeInTheDocument();
    expect(screen.getByText('One command to onboard')).toBeInTheDocument();
    expect(screen.getByText('JUnit XML + JSON output')).toBeInTheDocument();
  });

  it('renders the code example section', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /What a test looks like/ })).toBeInTheDocument();
  });
});
