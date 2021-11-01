import React from 'react'
import Form from '../../components/Form'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.formContainer}>
        <Form title='Parede 1'/>
        <Form title='Parede 2'/>
        <Form title='Parede 3'/>
        <Form title='Parede 4'/>
      </div>

      <div className={styles.resultContainer}>

      </div>
    </div>
  )
}
