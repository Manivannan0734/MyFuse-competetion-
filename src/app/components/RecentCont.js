// RecentCont.js
import React from 'react';
import styles from '../styles/CardContainer.module.css';
import data from '../data/job.json';
import RecentJob from './RecentJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
const RecentCont = () => {
  
  return (
    <div className={styles.cardscontainer}>
       <h1>RECENT JOB</h1><FontAwesomeIcon style={{marginTop:"-2.5rem"}} width={50}color='rgb(52,152,219)' icon={faMinus} />
       <p>Recent job trends highlight positions in data analysis, telemedicine, and remote project management.</p>
      {data.map((data, index) => (
        <RecentJob
          key={index}
          img={data.img}
          name={data.name}
          location={data.location}
          salary={data.salary}
          role={data.role}
        />
        
      ))}
      <div className={styles.btnshow}>
      <button className={styles.bs} type="">Show More</button>
      </div>
      
    </div>
  );
}

export default RecentCont;
