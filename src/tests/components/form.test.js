import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Verifica o componente Form', () => {
  test('Verifica se contem a parede com a numeração certa', () => {
    render(<App/>);
    const wall1 = screen.getByText('Parede 1');
    expect(wall1).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Altura"', () => {
    render(<App/>);
    const height = screen.getByLabelText('Altura');
    expect(height).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Largura"', () => {
    render(<App/>);
    const width = screen.getByLabelText('Largura');
    expect(width).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Porta"', () => {
    render(<App/>);
    const door = screen.getByLabelText('Porta');
    expect(door).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Janela"', () => {
    render(<App/>);
    const window = screen.getByLabelText('Janela');
    expect(window).toBeInTheDocument();
  });

  test('Verifica se tem um botão "Salvar" no component', () => {
    render(<App/>);
    const saveButton = screen.getByRole('button', {
      name: 'Salvar'
    });
    expect(saveButton).toBeInTheDocument();
  });

  test('Verifica se tem um botão "Reiniciar" no component', () => {
    render(<App/>);
    const restartButton = screen.getByRole('button', {
      name: 'Reiniciar'
    });
    expect(restartButton).toBeInTheDocument();
  });
});
