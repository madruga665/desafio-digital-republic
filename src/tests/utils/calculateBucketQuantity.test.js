import { calculateBucketQuantity } from "../../utils/calculateBucketQuantity";

describe('Verifica a função para calcular a quantidade de latas de tinta', () => {
  test('Testa a funcão com numeros inteiros', () => {
    expect(calculateBucketQuantity(5, 0.5)).toEqual(10);
    expect(calculateBucketQuantity(10, 2.5)).toEqual(4);
    expect(calculateBucketQuantity(8, 3.6)).toEqual(2.2222222222222223);
    expect(calculateBucketQuantity(55, 18)).toEqual(3.0555555555555554);
  });

  test('Testa a funcão com numeros float', () => {
    expect(calculateBucketQuantity(2.10, 0.5)).toEqual(4.2);
    expect(calculateBucketQuantity(2.10, 2.5)).toEqual(0.8400000000000001);
    expect(calculateBucketQuantity(10.50, 3.6)).toEqual(2.9166666666666665);
    expect(calculateBucketQuantity(2.33, 18)).toEqual(0.12944444444444445);
  });
});