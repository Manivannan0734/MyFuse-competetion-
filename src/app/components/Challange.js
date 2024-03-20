'use client'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Challange.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Challange = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div  data-aos="fade-up" data-aos-duration="1500" className={styles.container}>
        <div className={styles.font} >
           
            <h1> REGULAR CHALLENGE  </h1> <FontAwesomeIcon style={{marginTop:"-2.5rem"}} width={50}color='rgb(52,152,219)' icon={faMinus} />
            <p>  REGULAR CHALLENGE Elevate your skills and embrace growth with our Regular Challenge – a daily journey to unlock your full potential.</p>
            <img style={{borderRadius:"10px",width:"90%",height:"20%"}}  alt='loading' src='/one.png' />
        </div>
        
    </div>
  )
}

export default Challange