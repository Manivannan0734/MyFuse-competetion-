'use client'
import React from 'react'
import CountUp from 'react-countup';
import styles from '../styles/Counter.module.css'
const Counter = () => {
  return (
    <div className={styles.container}>
        <img className={styles.img} src="/ug.png" alt="loading"/>
        
        <CountUp style={{fontSize:"1.5rem"}} end={2500} duration={10}>   {/* Count up to 100 over 5 seconds */}
        {({ countUpRef }) => (
          <span ref={countUpRef} />
        )}
      </CountUp><h5> Active students</h5>

      <CountUp style={{fontSize:"1.5rem"}} end={3000} duration={10}>   {/* Count up to 100 over 5 seconds */}
        {({ countUpRef }) => (
          <span ref={countUpRef} />
        )}
      </CountUp><h5> Jobs</h5>

      <CountUp style={{fontSize:"1.5rem"}} end={2500} duration={10}>   {/* Count up to 100 over 5 seconds */}
        {({ countUpRef }) => (
          <span ref={countUpRef} />
        )}
      </CountUp><h5> Active Applications</h5>
    </div>
  )
}

export default Counter