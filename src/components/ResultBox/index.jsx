import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../contexts/MainContext';
import { calculateBucketQuantity } from '../../utils/calculateBucketQuantity';
import style from './styles.module.scss';

export default function ResultBox() {
  const { litros, paintBuckets, setPaintBuckets } = useContext(MainContext);
  const [bucketSize, setBucketSize] = useState()

  useEffect(() => {
    setPaintBuckets(Math.ceil(calculateBucketQuantity(litros, bucketSize)));
  }, [bucketSize]);

  return (
    <div className={style.resultBoxBorder}>
      <div className={style.resultBoxContainer}>
        <label htmlFor="bucketSize">Tamanho da lata de tinta</label>
        <select onChange={(event) => setBucketSize(event.target.value)} id="bucketSize">
          <option hidden value={0}>-</option>
          <option value={0.5}>0,5</option>
          <option value={2.5}>2,5</option>
          <option value={3.6}>3,6</option>
          <option value={18}>18</option>
        </select>
        <div className={style.result}>
          <span> Você precisará de {litros} Litros de tinta</span>
          <span>
            {}
            {paintBuckets > 1 
            ? `${!paintBuckets ? 0 : paintBuckets} latas de ${bucketSize} Litros`
            : `${!paintBuckets ? 0 : paintBuckets} lata de ${bucketSize} Litros`}
          </span>
        </div>
      </div>
    </div>
  );
}
