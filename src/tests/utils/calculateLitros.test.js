import { calculateLitros } from '../../utils/calculateLitros';

describe('Verifica a função para calcular a quantidade em litros de tinta', () => {
  test('Testa a funcão com numeros inteiros', () => {
    expect(calculateLitros(5, 0.5)).toEqual(1);
    expect(calculateLitros(10, 2.5)).toEqual(2);
    expect(calculateLitros(8, 3.6)).toEqual(1.6);
    expect(calculateLitros(55, 18)).toEqual(11);
  });

  test('Testa a funcão com numeros float', () => {
    expect(calculateLitros(2.10, 0.5)).toEqual(0.42000000000000004);
    expect(calculateLitros(2.10, 2.5)).toEqual(0.42000000000000004);
    expect(calculateLitros(10.50, 3.6)).toEqual(2.1);
    expect(calculateLitros(2.33, 18)).toEqual(0.466);
  });
});