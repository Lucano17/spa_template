import React from 'react'
import styles from "./Home.module.css"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
      <p>Expand your <b>business</b></p>

      <p>Show your <b>potential</b></p>

      <p>And <b>have no limits</b></p>
      </div>
      <div className={styles.ctaContainer}>
        <Link to='Contact'smooth doration={500} className={styles.callToAction}>Get a Quote</Link>
      </div>
    </div>
  )
}

export default Home

