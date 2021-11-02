import React, { useContext, useState } from 'react';
import MainContext from '../../contexts/MainContext';
import style from './styles.module.scss';

export default function ResultBox() {
  const { litros, paintBuckets } = useContext(MainContext);
  const [bucketSize, setBucketSize] = useState()

  console.log(bucketSize);

  return (
    <div className={style.resultBoxBorder}>
      <div className={style.resultBoxContainer}>
        <label htmlFor="bucketSize">Tamanho da lata de tinta</label>
        <select onChange={(event) => setBucketSize(event.target.value)} name="" id="bucketSize">
          <option value={0.5}>0,5</option>
          <option value={2.5}>2,5</option>
          <option value={3.6}>3,6</option>
          <option value={18}>18</option>
        </select>
        <div className={style.result}>
          <span>{litros} Litros</span>
          <span>{paintBuckets} Latas</span>
        </div>
      </div>
    </div>
  );
}
