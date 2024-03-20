import React from 'react'
import styles from '../styles/Intro.module.css'
const Intro = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.intro}>
            <h1 className={styles.h1}>Your Gateway to Infinite Opportunities</h1><br/>
            <p className={styles.p}>Discover a world of opportunities  with internships, projects,<br/> and a gateway to your professional future. Join a vibrant community that paves <br/> the way to success.</p>
            
            <div className={styles.container2}>
            <p className={styles.box} >OPEN THE GATEWAY</p> 
            </div>
           
        </div>
    </div>
  )
}

export default Intro