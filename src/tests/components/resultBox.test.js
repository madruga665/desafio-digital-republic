import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResultBox from '../../components/ResultBox'
import MainProvider from '../../contexts/MainProvider';
import Form from '../../components/Form';

describe('Verifica os elementos do ResultBox' , () => {
  test('Verifica se contem o titulo no component', () => {
    const { getByText } = render(
      <MainProvider>
        <ResultBox />
      </MainProvider>
    );
    const selectBucketSizeText = getByText('Escolha o tamanho da lata de tinta');
    expect(selectBucketSizeText).toBeInTheDocument();
  });

  test('Verifica se contem um input dropbox no component', () => {
    const { getByRole } = render(
      <MainProvider>
        <ResultBox />
      </MainProvider>
    );
    const droboxInput = getByRole('combobox', {
      name: /escolha o tamanho da lata de tinta/i
    });
    expect(droboxInput).toBeInTheDocument();
  });

  test('Verifica se contem um text indicando a quantidade de tinta necessária para pintar a sala', () => {
    const { getByText } = render(
      <MainProvider>
        <ResultBox />
      </MainProvider>
    );
    const amountOfInkText = getByText(/você precisará de 0\.00 litros de tinta/i)
    expect(amountOfInkText).toBeInTheDocument();
  });

  test('Verifica se contem um text indicando a quantidade de latas necessária para pintar a sala', () => {
    const { getByText } = render(
      <MainProvider>
        <ResultBox />
      </MainProvider>
    );
    const amountOfBuckets = getByText(/0 lata de 0 litros/i);
    expect(amountOfBuckets).toBeInTheDocument();
  });
});

describe('Verifica as informçõe são alteradas conforme o usuário preenche o formulário', () => {
  test('Verifica se o estado litros é alterado corretamente', () => {
    const { getByRole, getByText } = render(
      <MainProvider>
        <Form />
        <ResultBox />
      </MainProvider>
    );
    const heightInput = getByRole('spinbutton', {
      name: /altura/i
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, '5');

    const widthInput = getByRole('spinbutton', {
      name: /largura/i
    });
    expect(widthInput).toBeInTheDocument();
    userEvent.type(widthInput, '5');

    const saveButton = getByRole('button', {
      name: /salvar/i
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const amountOfInkText = getByText(/você precisará de 5\.00 litros de tinta/i)
    expect(amountOfInkText).toBeInTheDocument();
  });

  test('Verifica se o estado litros é alterado corretamente', () => {
    const { getByRole, getByText } = render(
      <MainProvider>
        <Form />
        <ResultBox />
      </MainProvider>
    );
    const heightInput = getByRole('spinbutton', {
      name: /altura/i
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, '5');

    const widthInput = getByRole('spinbutton', {
      name: /largura/i
    });
    expect(widthInput).toBeInTheDocument();
    userEvent.type(widthInput, '5');

    const saveButton = getByRole('button', {
      name: /salvar/i
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const amountOfBucketsInput = getByRole('combobox', {
      name: /escolha o tamanho da lata de tinta/i
    })
    expect(amountOfBucketsInput).toBeInTheDocument();
    userEvent.selectOptions(amountOfBucketsInput, '0,5 Litros');

    const spanBucket = getByText(/10 latas de 0\.5 litros/i);
    expect(spanBucket).toBeInTheDocument();
  });
});