import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import userEvent from '@testing-library/user-event';

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

describe('Verifica as informçõe são alteradas conforme o usuário preenche o formulário', () => {
  test('Verifica se o estado litros é alterado corretamente', () => {
    render(<App/>);
    const heightInput = screen.getByRole('spinbutton', {
      name: /altura/i
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, '5');

    const widthInput = screen.getByRole('spinbutton', {
      name: /largura/i
    });
    expect(widthInput).toBeInTheDocument();
    userEvent.type(widthInput, '5');

    const saveButton = screen.getByRole('button', {
      name: 'Salvar'
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const amountOfInkText = screen.getByText(/você precisará de 5\.00 litros de tinta/i)
    expect(amountOfInkText).toBeInTheDocument();
  });

  test('Verifica se o estado litros é alterado corretamente', () => {
    render(<App/>);
    const heightInput = screen.getByRole('spinbutton', {
      name: /altura/i
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, '5');

    const widthInput = screen.getByRole('spinbutton', {
      name: /largura/i
    });
    expect(widthInput).toBeInTheDocument();
    userEvent.type(widthInput, '5');

    const saveButton = screen.getByRole('button', {
      name: 'Salvar'
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const amountOfBucketsInput = screen.getByRole('combobox', {
      name: /escolha o tamanho da lata de tinta/i
    })
    expect(amountOfBucketsInput).toBeInTheDocument();
    userEvent.selectOptions(amountOfBucketsInput, '0,5 Litros');

    const spanBucket = screen.getByText(/10 latas de 0\.5 litros/i);
    expect(spanBucket).toBeInTheDocument();
  });
});