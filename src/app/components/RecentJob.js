import React from 'react'
import styles from '../styles/RecentJob.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocation,faMinus } from '@fortawesome/free-solid-svg-icons'


const RecentJob = ({img,name,location,salary,role}) => {
  return (
    <div className={styles.container}>
      
       <div className={styles.box}>
            <h1>{name}</h1> <br/>
            
            <p><FontAwesomeIcon width={50} height={30} icon={faLocation}/>{location}</p>
            <p>{salary}</p>
            <p>{role}</p>
            <div >
            <button className={styles.btn} type="">Full Time</button>
            <button className={styles.btn} type="">Active</button>
            </div>
            
        </div>
    </div>
  )
}

export default RecentJob