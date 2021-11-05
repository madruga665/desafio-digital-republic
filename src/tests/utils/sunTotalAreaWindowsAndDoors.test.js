import { sunTotalAreaWindowsAndDoors } from '../../utils/sunTotalAreaWindowsAndDoors';

describe('Verifica a função para calcular a soma da area de portas e janelas', () => {
  test('Testa a funcão com numeros inteiros', () => {
    expect(sunTotalAreaWindowsAndDoors(5, 0.5)).toEqual(12.76);
    expect(sunTotalAreaWindowsAndDoors(10, 2.5)).toEqual(27.8);
    expect(sunTotalAreaWindowsAndDoors(8, 3.6)).toEqual(24.672);
    expect(sunTotalAreaWindowsAndDoors(55, 18)).toEqual(159.36);
  });

  test('Testa a funcão com numeros float', () => {
    expect(sunTotalAreaWindowsAndDoors(2.10, 0.5)).toEqual(5.8);
    expect(sunTotalAreaWindowsAndDoors(2.10, 2.5)).toEqual(8.84);
    expect(sunTotalAreaWindowsAndDoors(10.50, 3.6)).toEqual(30.672);
    expect(sunTotalAreaWindowsAndDoors(2.33, 18)).toEqual(32.952);
  });
});