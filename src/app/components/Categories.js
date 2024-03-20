'use client'
import {React,useEffect} from 'react'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Categories.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faComputer,faMagnifyingGlass,faGears,faHelmetSafety,faMicrochip,faUserNurse,faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
const Categories = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
        <h1>TOP CATEGORIES</h1><FontAwesomeIcon style={{marginTop:"-2.5rem"}} width={50}color='rgb(52,152,219)' icon={faMinus} />
        
        <p>High-demand job categories feature software development, nursing, and digital marketing roles</p>
        
        
        <div className={styles.cont}>
        <div data-aos="fade-right" data-aos-duration="1500" className={styles.card}>
        <FontAwesomeIcon className={styles.wh} color='red' icon={faGraduationCap} /> 
        <h1>Education</h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="1500" className={styles.card}>
        <FontAwesomeIcon className={styles.wh}  width={100}color='red' icon={faComputer} /> 
        <h1>Retail and Consumer</h1>
        </div>
        <div data-aos="fade-left" data-aos-duration="1500" className={styles.card}>
        <FontAwesomeIcon className={styles.wh}  width={100}color='red' icon={faMagnifyingGlass} /> 
        <h1>Travel and Tourism</h1>
        </div>

<div data-aos="fade-right" data-aos-duration="1500"  className={styles.card}>
        <FontAwesomeIcon className={styles.wh}  width={100}color='red' icon={faGears} /> 
        <h1>Transportation and Logistics</h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="1500" className={styles.card}>
        <FontAwesomeIcon className={styles.wh}  width={100}color='red' icon={faHelmetSafety} /> 
        <h1>Engineering and Manufracturing</h1>
        </div>

        <div data-aos="fade-left" data-aos-duration="1500" className={styles.card}>
        <FontAwesomeIcon className={styles.wh}  width={100}color='red' icon={faMicrochip} /> 
        <h1>Technolgy and IT</h1>
        </div>

        <div data-aos="fade-right" data-aos-duration="1500" className={styles.card}>
        <FontAwesomeIcon className={styles.wh}  width={100}color='red' icon={faUserNurse} /> 
        <h1>Health Care </h1>
        </div>

        
        <div data-aos="fade-left" data-aos-duration="1500" className={styles.card}>
        <FontAwesomeIcon className={styles.wh}  width={100}color='red' icon={faBuildingColumns} /> 
        <h1>Finance and Banking</h1>
        </div>


        </div>
    </div>
  )
}

export default Categories