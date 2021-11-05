import React, { useContext, useState } from 'react';
import MainContext from '../../contexts/MainContext';
import { calculateArea } from '../../utils/calculateArea';
import { calculateLitros } from '../../utils/calculateLitros';
import { subtractWindowAndDoorArea } from '../../utils/subtractWindowAndDoorArea';
import { sunTotalAreaWindowsAndDoors } from '../../utils/sunTotalAreaWindowsAndDoors';
import { validates } from '../../validations/validations';
import FormField from '../FormField';
import styles from './styles.module.scss';

export default function Form() {
  const { litros, setLitros } = useContext(MainContext);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [door, setDoor] = useState('');
  const [window, setWindow] = useState('');
  const [wall, setWall] = useState("Parede");
  const [wallNumber, setWallNumber] = useState(1);
  const [disableButton, setDisableButton] = useState(false);
  const [error, setError] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const squareMeter = calculateArea(Number(height), Number(width));
    const totalAreaToSubtract = sunTotalAreaWindowsAndDoors(Number(window), Number(door));
    const subtractArea = subtractWindowAndDoorArea(squareMeter, totalAreaToSubtract);
    const result = calculateLitros(subtractArea);
    const ErrorMessage = validates(height, width, door, squareMeter, subtractArea);

    if (ErrorMessage) {
      setError({ ...ErrorMessage });
    } else {
      setLitros(litros + result);
      setWallNumber(wallNumber + 1);
      resetValues();
    }

    if (wallNumber === 4 && !ErrorMessage) {
      setWallNumber("");
      setWall("Finalizado! confira o resultado ao lado");
      setDisableButton(true);
    }
  };

  return (
    <div className={styles.formBorder}>
      <form className={styles.formContentWrapper} onSubmit={handleSubmit}>
        <h2>{`${wall} ${wallNumber}`}</h2>
        <div className={styles.formContainer}>
          <div className={styles.groupContainer}>
            <FormField
              field={height}
              setField={setHeight}
              label='Altura'
              placeholder='ex: 4,80m'
              name='height'
              id='height'
              style={{ border: error.errorHeight ? "2px solid #F61212" : "" }}
            />
            <span className={styles.errorMessage}>{error.errorHeight}</span>
            <span className={styles.errorMessage}>{error.errorWallHeigthWithDoor}</span>
            <span className={styles.errorMessage}>{error.errorMaxSubtractArea}</span>

            <FormField
              field={width}
              setField={setWidth}
              label='Largura'
              placeholder='ex: 6,80m'
              name='width'
              id='width'
            />
            <span className={styles.errorMessage}>{error.errorWidth}</span>
          </div>

          <div className={styles.groupContainer}>
            <FormField
              field={door}
              setField={setDoor}
              label='Porta'
              placeholder='Quantidade de portas'
              name='door'
              id='door'
              min='0'
            />

            <FormField
              field={window}
              setField={setWindow}
              label='Janela'
              placeholder='Quantidade de janelas'
              name='door'
              id='window'
              min='0'
            />
          </div>
          
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleRestart} type='button'>
            Reiniciar
          </button>
          <button type='submit' disabled={disableButton}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
