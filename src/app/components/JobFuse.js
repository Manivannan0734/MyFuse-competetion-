'use client'
import {React,useEffect} from 'react'
import styles from '../styles/Challange.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
const JobFuse = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div  data-aos="fade-up" data-aos-duration="1500" className={styles.container}>
        <h1 >JOB FUSE</h1><FontAwesomeIcon style={{marginTop:"0"}} width={50}color='rgb(52,152,219)' icon={faMinus} />
        Unlock endless career possibilities with Myfuse – the platform that bridges gap between Students and Job opportunities in India.
    </div>
  )
}

export default JobFuse