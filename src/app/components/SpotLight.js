import React from 'react'
import styles from '../styles/SpotLight.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
const SpotLight = () => {
  return (
    <div className={styles.container}>
        <h1>COMPANY SPOTLIGHT</h1><FontAwesomeIcon style={{marginTop:"-2.5rem"}} width={50}color='rgb(52,152,219)' icon={faMinus} />
        <p>Discover the essence of company in the Spotlight. Learn more about the mission, values, and achievements. Get a closer look at what sets this the company apart.</p>
    
    <div className={styles.container2}>
        <div>
            <span><h1 className={styles.random} >UNLOCKING YOUR PROFESSIONAL FUTURE:</h1></span>
            <p>In the fast-paced and competitive job market, students face the challenge of not only excelling academically but also becoming employable even before graduation. This blog aims to guide you through the journey of enhancing your employability while still studying, providing practical tips to set you on the path to a successful and fulfilling career.</p>
            <button className={styles.btn} >Read More</button>
        </div> 
      

        
    </div>
    
    </div>
  )
}

export default SpotLight