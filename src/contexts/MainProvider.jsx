
import React, { useState } from 'react';
import MainContext from './MainContext';
import PropTypes from 'prop-types'

export default function MainProvider({ children }) {
  const [litros, setLitros] = useState(0);
  const [paintBuckets, setPaintBuckets] = useState(0);

  const calculateArea = (heigth, width) => {
    const result = heigth * width;
    return result;
  };

  const GlobalState = {
    litros,
    paintBuckets,
    calculateArea,
    setLitros,
    setPaintBuckets,
  };

  return (
      <MainContext.Provider value={ GlobalState }>
        {children}
      </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
