import React, { useContext, useState } from 'react';
import MainContext from '../../contexts/MainContext';
import { calculateArea } from '../../utils/calculateArea';
import { calculateLitros } from '../../utils/calculateLitros';
import { subtractWindowAndDoorArea } from '../../utils/subtractWindowAndDoorArea';
import { sunTotalAreaWindowsAndDoors } from '../../utils/sunTotalAreaWindowsAndDoors';
import { validation } from '../../validations/validations';
// import { wallMesurements } from  '../../validations/validations';
import styles from './styles.module.scss';

export default function Form() {
  const { litros, setLitros } = useContext(MainContext);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [door, setDoor] = useState('');
  const [window, setWindow] = useState('');
  const [wall, setWall] = useState('Parede');
  const [wallNumber, setWallNumber] = useState(1);
  const [disableButton, setDisableButton] = useState(false);
  const [ error, setError ] = useState({});

  // const validation = async () => {
  //   const formData = {
  //     height: height,
  //     width: width,
  //   };
  //   console.log(formData)
  //   const isValid = await wallMesurements.isValid(formData);
  //   console.log(isValid);
  // }


  const resetValues = () => {
    setHeight('');
    setWidth('');
    setDoor('');
    setWindow('');
    setError('');
  };

  const handleRestart = () => {
    resetValues();
    setLitros(0);
    setWall('Parede');
    setWallNumber(1);
    setDisableButton(false);
  };

  const calculateResult = () => {
    const squareMeter = calculateArea(Number(height), Number(width));
    const totalAreaToSubtract = sunTotalAreaWindowsAndDoors(Number(window), Number(door));
    const subtractArea = subtractWindowAndDoorArea(squareMeter, totalAreaToSubtract);
    const result = calculateLitros(subtractArea);
    return result;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorMessage = validation(height, width);
    if (errorMessage) {
      setError({...errorMessage});
    } else {
      const result = calculateResult();
      setLitros(litros + result);
      setWallNumber(wallNumber + 1);
      resetValues();
    }

    if (wallNumber === 4) {
      setWallNumber('');
      setWall('Finalizado! confira o resultado ao lado');
      setDisableButton(true);
    }
  };

  return (
    <div className={styles.formBorder }>
      <form className={styles.formContentWrapper} onSubmit={handleSubmit}>
        <h2>{`${wall} ${wallNumber}`}</h2>
        <div className={styles.formContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="height">Altura</label>
              <input 
                onChange={(event) => setHeight(event.target.value)} 
                value={height}
                type="number" 
                id='height' 
                name='height'
                placeholder='ex: 4,80m'
                style={{border: error.errorHeight ? '2px solid #F61212' : ''}}
              />
              <span className={styles.errorMessage}>{error.errorHeight}</span>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="width">Largura</label>
              <input 
                onChange={(event) => setWidth(event.target.value)}
                value={width}
                type="number" 
                id='width'
                name='width'
                placeholder='ex: 6,80m'
                style={{border: error.errorWidth ? '2px solid #F61212' : ''}}
              />
            </div>
            <span className={styles.errorMessage}>
              {error.errorWidth}
            </span>
          </div>

          <div className={styles.groupContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="door">Porta</label>
              <input 
                onChange={(event) => setDoor(event.target.value)} 
                value={door}
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
                value={window}
                type="number" 
                id='window' 
                placeholder='Quantidade de janelas' 
                min='0'
              />
            </div>
          </div>
        </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleRestart} type='button'>Reiniciar</button>
            <button type='submit' disabled={disableButton}>Salvar</button>
          </div>
      </form>
    </div>
  );
}
