import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import userEvent from '@testing-library/user-event';

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

describe('Verifica se as mensagens de erro são renderizadas', () => {
  test('Verifica se a mensagem de erro de Altura aparece, ao clicar no botão salvar sem preencher os campos', () => {
    render(<App/>);
    const saveButton = screen.getByRole('button', {
      name: 'Salvar'
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const minAndMaxHeightMessageError = screen.getByText('Altura mínima 1 metro e máxima 15 metros');
    expect(minAndMaxHeightMessageError).toBeInTheDocument();
  });

  test('Verifica se a mensagem de erro de Largura aparece, ao clicar no botão salvar sem preencher o campo de Largura', () => {
    render(<App/>);
    const heightInput = screen.getByRole('spinbutton', {
      name: /altura/i
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, '5');

    const saveButton = screen.getByRole('button', {
      name: 'Salvar'
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const minAndMaxWidthMessageError = screen.getByText('Largura mínima 1 metro e máxima 15 metros');
    expect(minAndMaxWidthMessageError).toBeInTheDocument();
  });

  test('Verifica se a mensagem de erro de altura minima com porta aparece, ao clicar no botão salvar com altura minima menor que 2.20 e com 1 porta', () => {
    render(<App/>);
    const heightInput = screen.getByRole('spinbutton', {
      name: /altura/i
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, '2');

    const widthInput = screen.getByRole('spinbutton', {
      name: /largura/i
    });
    expect(widthInput).toBeInTheDocument();
    userEvent.type(widthInput, '5');

    const doorInput = screen.getByRole('spinbutton', {
      name: /porta/i
    });
    expect(doorInput).toBeInTheDocument();
    userEvent.type(widthInput, '1');

    const saveButton = screen.getByRole('button', {
      name: 'Salvar'
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const { getByText } = render(
      <span>Paredes com porta devem ter no minimo 2.20m de altura</span>
    );
    expect(getByText('Paredes com porta devem ter no minimo 2.20m de altura')).toBeInTheDocument();
  });
});
