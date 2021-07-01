import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



describe('App tests', () => {
  it('Renders the application', () => {
    render(<App />)
    const header = screen.getByText('Github/Firestore User List')

    expect(header).toBeInTheDocument()
  })
})