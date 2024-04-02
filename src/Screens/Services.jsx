import React from 'react'
import styles from "./Services.module.css"
import desktop from "../assets/desktop.jpg"

const Services = () => {

  const deskImage = "../assets/desktop.jpg"

  return (
    <div name="Services" className={styles.services}>
      <p>We solve your company's problems by creating amazing web pages</p>
      <img 
      className={styles.desktopImage} 
      src={desktop} 
      alt="desktop image" />
    </div>
  )
}

export default Services
