import React from 'react';
import Home from './pages/Home';
import './App.css';
import MainProvider from './contexts/MainProvider';

function App() {
  return (
    <MainProvider>
      <main className="App">
        <h1>Desafio Digital Republic</h1>
        <h3>Calcule a quantidade de tinta para pintar uma sala</h3>
        <Home />
      </main>
    </MainProvider>
  );
}

export default App;
