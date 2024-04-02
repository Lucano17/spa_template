import React from 'react'
import styles from "./Step.module.css"

const step = ({text, step}) => {
  return (
    <div className={styles.container}>
        <div className={styles.stepContainer}>
        <p className={styles.stepNumber}>{step}</p>
        <p className={styles.text}>{text}</p>
        </div>
      <div className={styles.border}></div>
    </div>
  )
}

export default step
