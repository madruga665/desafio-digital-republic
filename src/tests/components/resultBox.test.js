import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Verifica os elementos do ResultBox' , () => {
  test('Verifica se contem o titulo no component', () => {
    render(<App/>);
    const selectBucketSizeText = screen.getByText('Escolha o tamanho da lata de tinta');
    expect(selectBucketSizeText).toBeInTheDocument();
  });

  test('Verifica se contem um input dropbox no component', () => {
    render(<App/>);
    const droboxInput = screen.getByRole('combobox', {
      name: /escolha o tamanho da lata de tinta/i
    });
    expect(droboxInput).toBeInTheDocument();
  });

  test('Verifica se contem um text indicando a quantidade de tinta necessária para pintar a sala', () => {
    render(<App/>);
    const amountOfInkText = screen.getByText(/você precisará de 0\.00 litros de tinta/i)
    expect(amountOfInkText).toBeInTheDocument();
  });

  test('Verifica se contem um text indicando a quantidade de latas necessária para pintar a sala', () => {
    render(<App/>);
    const amountOfBuckets = screen.getByText(/0 lata de 0 litros/i);
    expect(amountOfBuckets).toBeInTheDocument();
  });
});