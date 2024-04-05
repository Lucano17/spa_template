import React from 'react'
import styles from "./Services.module.css"
import coding1 from "../assets/coding1.jpg"

const Services = () => {

  const deskImage = "../assets/desktop.jpg"

  return (
    <div name="Services" className={styles.services}>
      <p>We can take your business to the next level, and achieve your goals</p>
      <p>We can make a <b>Landing page</b>, a <b>Multi-page web</b>, an <b>E-commerce</b>, a <b>Blog</b> an much more </p>
      <img 
      className={styles.desktopImage} 
      src={coding1} 
      alt="desktop image" />
    </div>
  )
}

export default Services
