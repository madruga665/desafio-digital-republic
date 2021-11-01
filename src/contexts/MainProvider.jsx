
import React from 'react';
import MainContext from './MainContext';
import PropTypes from 'prop-types'

export default function MainProvider({ children }) {
  const GlobalState = {}

  return (
      <MainContext.Provider value={ GlobalState }>
        {children}
      </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
