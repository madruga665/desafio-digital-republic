import React from 'react';
import style from './styles.module.scss';

export default function ResultBox() {
  return (
    <div className={style.resultBoxBorder}>
      <div className={style.resultBoxContainer}>
        <label htmlFor="bucketSize">Tamanho da lata de tinta</label>
        <select name="" id="bucket size">
          <option value="">0.5</option>
          <option value="">2,5</option>
          <option value="">3,6</option>
          <option value="">18</option>
        </select>
      </div>
    </div>
  );
}
