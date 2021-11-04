export const validates = (height, width, doorQuantity, squareMeter, subtractArea) => {
  
  if (Number(height) < 1 || Number(height) > 15) {
    return {
      errorHeight: 'Altura mínima 1 metro e máxima 15 metros',
    }
  }
  if (Number(width) < 1 || Number(width) > 15) {
    return {
      errorWidth: 'Largura mínima 1 metro e máxima 15 metros'
    }
  }
  if (height < 2.20 && doorQuantity >= 1) {
    return {
      errorWallHeigthWithDoor: 'Paredes com porta devem ter no minimo 2.20m de altura'
    }
  }
  if ((squareMeter / 2) >= subtractArea ) {
    return {
      errorMaxSubtractArea: 'A area maxima de portas e janelas deve ser menor que 50% da area da parede'
    }
  }
};
