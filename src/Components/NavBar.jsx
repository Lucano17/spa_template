import React from 'react';
import { Link } from 'react-scroll'
import styles from "./NavBar.module.css"
import { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5"
import { IoCloseSharp } from "react-icons/io5"
import { useScrollPosition } from '../Hooks/scrollPosition';

const NavBar = () => {
  const  [navBarOpen, setNavBarOpen] = useState(false)
  const [windowDimention, setWindowDimention] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
// activeSection
  const [activeSection, setActiveSection] = useState('Home');
  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    setNavBarOpen(false);
  };

  const detectDimention = ()=>{
    setWindowDimention(
    {width: window.innerWidth,
    height: window.innerHeight
    })
  }
  
  useEffect(()=>{
    window.addEventListener("resize", detectDimention)
    windowDimention.width > 800 && setNavBarOpen(false)
    return ()=>{
      window.removeEventListener("resize", detectDimention)
    }
  },[windowDimention])

  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "Services"
    },
    {
      id: 3,
      link: "HowWeWork"
    },
    {
      id: 4,
      link: "Benefits"
    },
  ]

  const scrollPosition = useScrollPosition()

  return (
    <>
    <div name="NavBar" className= {navBarOpen
    ? styles.navOpen
    : scrollPosition > 0
    ? styles.navOnScroll
    : styles.navBar}>
    {!navBarOpen && 
    
    <p className={styles.logo}>
      <span>DLF DEV | </span> 
      Web development
    </p>}
    
    {!navBarOpen && windowDimention.width < 800 ? (
      <IoMenu 
      color='white'
      onClick={()=> setNavBarOpen(!navBarOpen)} 
      size={25}/>
    ) : windowDimention.width < 800 && (
      <IoCloseSharp 
      onClick={()=> setNavBarOpen(!navBarOpen)} 
      color='white' 
      size={25}
      />
    )}
      {navBarOpen && (
    <ul className={styles.linksContainer}>  
      <li>
      {links.map((x) => (
        //key id activeSection
        <div key={x.id}>
          <Link
          onClick={
            ()=>{
              setNavBarOpen(false)
              // activeSection
              handleSectionClick(x.link)
            }}
          to={x.link}
          smooth
          duration={500}
          className={`${styles.navLink} ${activeSection === x.link ? styles.activeSection: ""}`}
          >{x.link === "HowWeWork" ? "How We Work" : x.link}</Link>
          <div className={styles.border}></div>
        </div>
      ))}
      </li> 
    </ul>
    )}
    {
    windowDimention.width > 800 &&
    <ul className={styles.linksContainer}>
    {links.map((x) => (
      <div>
        <Link
        onClick={()=>{
          setNavBarOpen(false)
          // activeSection
          handleSectionClick(x.link)
        }}
        to={x.link}
        smooth
        duration={500}
        className={`${styles.navLink} ${activeSection === x.link ? styles.activeSection: ""}`}
        >{x.link === "HowWeWork" ? "How We Work" : x.link}</Link>
        <div className={styles.border}></div>
      </div>
    ))}
    <Link
    onClick={()=>{
      setNavBarOpen(false)
      // activeSection
      handleSectionClick("Contact")
    }}
    to={"Contact"}
    smooth
    duration={500}
    className={`${styles.contactLink} ${activeSection === "Contact" ? styles.activeSection: ""}`}>
      Contact</Link>
  </ul>}
    </div>
    </>
)};

export default NavBar;