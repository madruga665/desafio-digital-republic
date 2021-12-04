import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../../components/Form";
import MainProvider from "../../contexts/MainProvider";

describe("Verifica o componente Form", () => {
  test("Verifica se contem a parede com a numeração certa", () => {
    const { getByText } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const wall1 = getByText("Parede 1");
    expect(wall1).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Altura"', () => {
    const { getByLabelText } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const height = getByLabelText("Altura");
    expect(height).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Largura"', () => {
    const { getByLabelText } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const width = getByLabelText("Largura");
    expect(width).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Porta"', () => {
        const { getByLabelText } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const door = getByLabelText("Porta");
    expect(door).toBeInTheDocument();
  });

  test('Verifica se contem um input com a label "Janela"', () => {
        const { getByLabelText } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const window = getByLabelText("Janela");
    expect(window).toBeInTheDocument();
  });

  test('Verifica se tem um botão "Salvar" no component', () => {
        const { getByRole } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const saveButton = getByRole("button", {
      name: "Salvar",
    });
    expect(saveButton).toBeInTheDocument();
  });

  test('Verifica se tem um botão "Reiniciar" no component', () => {
        const { getByRole } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const restartButton = getByRole("button", {
      name: "Reiniciar",
    });
    expect(restartButton).toBeInTheDocument();
  });
});

describe("Verifica se as mensagens de erro são renderizadas", () => {
  test("Verifica se a mensagem de erro de Altura aparece, ao clicar no botão salvar sem preencher os campos", () => {
        const { getByRole, getByText } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const saveButton = getByRole("button", {
      name: "Salvar",
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const minAndMaxHeightMessageError = getByText(
      "Altura mínima 1 metro e máxima 15 metros"
    );
    expect(minAndMaxHeightMessageError).toBeInTheDocument();
  });

  test("Verifica se a mensagem de erro de Largura aparece, ao clicar no botão salvar sem preencher o campo de Largura", () => {
        const { getByRole, getByText } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const heightInput = getByRole("spinbutton", {
      name: /altura/i,
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, "5");

    const saveButton = getByRole("button", {
      name: "Salvar",
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const minAndMaxWidthMessageError = getByText(
      "Largura mínima 1 metro e máxima 15 metros"
    );
    expect(minAndMaxWidthMessageError).toBeInTheDocument();
  });

  test("Verifica se a mensagem de erro de altura minima com porta aparece, ao clicar no botão salvar com altura minima menor que 2.20 e com 1 porta", () => {
        const { getByRole } = render(
      <MainProvider>
        <Form />
      </MainProvider>
    );
    const heightInput = getByRole("spinbutton", {
      name: /altura/i,
    });
    expect(heightInput).toBeInTheDocument();
    userEvent.type(heightInput, "2");

    const widthInput = getByRole("spinbutton", {
      name: /largura/i,
    });
    expect(widthInput).toBeInTheDocument();
    userEvent.type(widthInput, "5");

    const doorInput = getByRole("spinbutton", {
      name: /porta/i,
    });
    expect(doorInput).toBeInTheDocument();
    userEvent.type(widthInput, "1");

    const saveButton = getByRole("button", {
      name: "Salvar",
    });
    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);

    const { getByText } = render(
      <span>Paredes com porta devem ter no minimo 2.20m de altura</span>
    );
    expect(getByText("Paredes com porta devem ter no minimo 2.20m de altura")).toBeInTheDocument();
  });
});
