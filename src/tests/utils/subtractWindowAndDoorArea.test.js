import { subtractWindowAndDoorArea } from '../../utils/subtractWindowAndDoorArea';

describe('Verifica a função para calcular a subtração da area de portas e janelas da area total da parede', () => {
  test('Testa a funcão com numeros inteiros', () => {
    expect(subtractWindowAndDoorArea(5, 0.5)).toEqual(4.5);
    expect(subtractWindowAndDoorArea(10, 2.5)).toEqual(7.5);
    expect(subtractWindowAndDoorArea(8, 3.6)).toEqual(4.4);
    expect(subtractWindowAndDoorArea(55, 18)).toEqual(37);
  });

  test('Testa a funcão com numeros float', () => {
    expect(subtractWindowAndDoorArea(2.10, 0.5)).toEqual(1.6);
    expect(subtractWindowAndDoorArea(2.10, 2.5)).toEqual(-0.3999999999999999);
    expect(subtractWindowAndDoorArea(10.50, 3.6)).toEqual(6.9);
    expect(subtractWindowAndDoorArea(2.33, 18)).toEqual(-15.67);
  });
});