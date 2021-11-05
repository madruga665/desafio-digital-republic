import { calculateArea } from "../../utils/calculateArea"

describe('Verifica a função para calcular a area', () => {
  test('Testa a funcão com numeros inteiros', () => {
    expect(calculateArea(5, 5)).toEqual(25);
    expect(calculateArea(5, 0)).toEqual(0);
    expect(calculateArea(10, 5)).toEqual(50);
    expect(calculateArea(5, 6)).toEqual(30);
    expect(calculateArea(5, 1)).toEqual(5);
  });

  test('Testa a funcão com numeros float', () => {
    expect(calculateArea(2.10, 5)).toEqual(10.5);
    expect(calculateArea(2.10, 8.51)).toEqual(17.871);
    expect(calculateArea(10.50, 15)).toEqual(157.5);
    expect(calculateArea(2.33, 5.12)).toEqual(11.9296);
    expect(calculateArea(5.5, 5.5)).toEqual(30.25);
  });
});