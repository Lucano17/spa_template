import React from 'react'
import styles from "./Benefits.module.css"
import { TbWorldDollar } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FaRepeat } from "react-icons/fa6";

const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitsTitle}>Benefits of having a profesional web with us</h2>
      <p>You open up to the world <TbWorldDollar/></p>
      <p>New customers <FaPeopleCarry/></p>
      <p>Much lower costs <FaMoneyBillAlt/></p>
      <p>No schedules <AiOutlineSchedule/></p>
      <p>Ultrasegmented marketing + high conversion <AiOutlineRise/></p>
      <p>Automation, less work, more performance <FaRepeat/></p>
    </div>
  )
}

export default Benefits
