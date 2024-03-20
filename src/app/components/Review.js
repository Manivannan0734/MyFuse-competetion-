'use client'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Review.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}><h1>What Graduates Say About Myfuse!</h1>
   <FontAwesomeIcon style={{marginTop:"-2.5rem"}} width={50}color='rgb(52,152,219)' icon={faMinus} />
    <p>Discover what our satisfied customers have to say about their experiences with our products and services. Read these testimonials to gain insights into the positive impact we've had on their lives</p>
    <div className={styles.cardcont}>
      <div data-aos="fade-right" data-aos-duration="1500" className={styles.card}>
        <img width={50} style={{marginTop:"1em"}} height={50} src="/male.png" alt=""/>
        <h3>Rajesh Kumar</h3>
         <p>
         One of the portal's standout features is its extensive job stings. It covers a wide spectrum of industries and job roles, making it a valuable platform for job seekers. The search and filter options help users find relevant job openings efficiently
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className={styles.card}>
      <img style={{marginTop:"1em"}} width={50} height={50} src="/female.png" alt=""/>
      <h3>Sneha Kumari</h3>
         <p>
         With the help of Myfuse I was able to land my dream job as a software developer. The messaging feature allowed me to connect directly with HR representatives and clarify any doubts I had, makina the job application process so much easier
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500" className={styles.card}>
      <img style={{marginTop:"1em"}} width={50} height={50} src="/female.png" alt=""/>
      <h3>Rahul paul</h3>
         <p>
         Myfuse offered me range of job opportunities across various industries able to use the messaging feature to communicate of companies directly, me. The job application process seamless and hassle-free
        </p>
      </div>
      <img className={styles.coder} src="/coder.png"   alt=""/>
    </div>
    </div>
  )
}

export default Review