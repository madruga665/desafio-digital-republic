/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import MainContext from '../../contexts/MainContext';
import { calculateArea } from '../../utils/calculateArea';
import { calculateLitros } from '../../utils/calculateLitros';
import styles from './styles.module.scss';

export default function Form() {
  const { litros, setLitros } = useContext(MainContext);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [door, setDoor] = useState(0);
  const [window, setWindow] = useState(0);
  const [wall, setWall] = useState('Parede');
  const [wallNumber, setWallNumber] = useState(1);

  console.log(door, window);

  const handleSubmit = () => {
    const squareMeter = calculateArea(Number(height), Number(width));
    const result = calculateLitros(squareMeter);
    setLitros(litros + result);
    setWallNumber(wallNumber + 1);
    setHeight('');
    setWidth('');

    if (wallNumber === 4) {
      setWallNumber('');
      setWall('Finalizado! confira o resultado ao lado')
    }
  };

  const reset = () => {
    setLitros(0);
    setHeight('');
    setWidth('');
    setWallNumber(1);
  };

  return (
    <div className={styles.formBorder }>
      <div className={styles.formContentWrapper}>
        <h2>{`${wall} ${wallNumber}`}</h2>
        <form className={styles.formContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="height">Altura</label>
              <input 
                onChange={(event) => setHeight(event.target.value)} 
                value={height}
                type="number" 
                id='height' 
                placeholder='ex: 4,80m' min='0'
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="width">Largura</label>
              <input 
                onChange={(event) => setWidth(event.target.value)}
                value={width}
                type="number" 
                id='width' 
                placeholder='ex: 6,80m' min='0' 
              />
            </div>
          </div>

          <div className={styles.groupContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="door">Porta</label>
              <input 
                onChange={(event) => setDoor(event.target.value)} 
                type="number" 
                id='door' 
                placeholder='Quantidade de portas' 
                min='0'  
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="window">Janela</label>
              <input 
                onChange={(event) => setWindow(event.target.value)} 
                type="number" 
                id='window' 
                placeholder='Quantidade de janelas' min='0'
              />
            </div>
          </div>
        </form>
          <div className={styles.buttonContainer}>
            <button onClick={reset} type='button'>Reiniciar</button>
            <button onClick={handleSubmit} type='button'>Salvar</button>
          </div>
      </div>
    </div>
  )
}
