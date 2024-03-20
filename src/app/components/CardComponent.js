
import React from 'react';
import styles from '../styles/CardContainer.module.css'
const CardComponent = ({ img, title, para }) => {
  return (
    <div   className={styles.card}>
      {/* Render image if available */}
      {img && <img width={50} height={50} src={img} alt="Card" />}
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
};

export default CardComponent;
