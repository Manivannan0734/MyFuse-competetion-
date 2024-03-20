import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Blog.module.css'
const Blog = () => {
  return (
    <div className={styles.container}><h1>Recent Blog</h1>
    <FontAwesomeIcon style={{marginTop:"-2.5rem"}} width={50}color='rgb(52,152,219)' icon={faMinus} />
    <p>Stay up-to-date with our latest insights and updates in our Recent Blog. Explore our most recent articles and posts to gain valuable knowledge on various topics.</p>
    <div className={styles.cardcont}>
      <div className={styles.card}>
        <img className={styles.img} src="/mf.png" alt=""/>
        <h2>Technology</h2>
        <h3>Unlocking Your Professional Future:</h3>
        <button className={styles.btn}>Read More..</button>
      </div>
      <div className={styles.card}>
      <img className={styles.img} src="/zep.png" alt=""/>
        <h2>E-Commerce</h2>
        <h3>Zepto</h3>
        <button className={styles.btn}>Read More..</button>
      </div>
      <div className={styles.card}>
      <img className={styles.img} src="/o.png"  alt=""/>
        <h2>Finance</h2>
        <h3>Zerodha</h3>
        <button className={styles.btn}>Read More..</button>
      </div>


    </div>
    </div>
  )
}

export default Blog