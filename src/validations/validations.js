export const validation = (height, width) => {
  
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
}