'use client'
import {React,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faThumbsUp,faUserTie } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/How.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const How = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
        <h1>How It Works..?</h1>
        <div className={styles.cardcont}>
            <div data-aos="fade-right" data-aos-duration="1500" className={styles.card}>
            <FontAwesomeIcon width={50} height={50} icon={faMagnifyingGlass} />
            <h1>1.Search a Job</h1>
            <p>Looking for your next career opportunity? Explore our job listings and find the perfect match for your skills and aspirations. Your dream job may be just a click away!</p>
            </div>

            <div data-aos="fade-left" data-aos-duration="1500" className={styles.card}>
            <FontAwesomeIcon width={50} height={50} icon={faThumbsUp} />
            <h1>2.Apply for a job</h1>
            <p>Ready to take the next step in your career? Browse our job openings and start your application process today. Your future awaits – apply for your dream job now!.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className={styles.card}>
            <FontAwesomeIcon width={50} height={50} icon={faUserTie} />
            <h1>3.Get your job</h1>
            <p>Unlock your career potential with us! Browse through our job listings and take the first step towards securing your dream job. Your future career is just a few clicks away..</p>
            </div>
        </div>
    </div>
  )
}

export default How