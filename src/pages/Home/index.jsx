import React from 'react'
import Form from '../../components/Form'
import ResultBox from '../../components/ResultBox'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.formContainer}>
        <Form />
      </div>

      <div className={styles.resultContainer}>
        <ResultBox />
      </div>
    </div>
  )
}
