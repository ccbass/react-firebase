import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';



describe('App tests', () => {
  it('Renders the application', () => {
    render(<App />)
    expect('Github/Firestore User List').toBeInTheDocument()
  })
})