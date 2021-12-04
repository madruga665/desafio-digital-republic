/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

export default function FormField({ field, setField, style, label, placeholder, min, id }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor='height'>{label}</label>
      <input
        onChange={(event) => setField(event.target.value)}
        value={field}
        type='number'
        style={style}
        placeholder={placeholder}
        min={min}
        id={id}
      />
    </div>
  );
}
