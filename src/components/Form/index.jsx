/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

export default function Form(props) {
  return (
    <div className={styles.formContentWrapper}>
      <h2>{props.title}</h2>
      <form className={styles.formContainer}>
        <div className={styles.groupContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="height">Altura</label>
            <input type="number" id='height' />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="width">Largura</label>
            <input type="number" id='width' />
          </div>
        </div>

        <div className={styles.groupContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="door">Porta</label>
            <input type="number" id='door' />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="window">Janela</label>
            <input type="number" id='window' />
          </div>
        </div>
      </form>
    </div>
  )
}
