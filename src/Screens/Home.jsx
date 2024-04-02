import React from 'react'
import styles from "./Home.module.css"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
      <p>Expand your<br/>
      <b>business</b></p>

      <p>With the <b>best<br/>
      online presence</b></p>
      </div>
      <div className={styles.ctaCointainer}>
        <Link to='Contact'smooth doration={500} className={styles.callToAction}>Get a Quote</Link>
      </div>
    </div>
  )
}

export default Home

