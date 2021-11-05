import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Verifica se a pagina tem title e subtitle', () => {
  test('testa se a pagina tem o titulo', () => {
    render(<App />);
    const title = screen.getByText('Desafio Digital Republic');
    expect(title).toBeInTheDocument();
  });

  test('testa se a pagina tem o subtitulo', () => {
    render(<App />);
    const title = screen.getByText('Calcule a quantidade de tinta para pintar uma sala');
    expect(title).toBeInTheDocument();
  });
})