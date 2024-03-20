
import {React} from 'react';
import CardComponent from './CardComponent';
import data from '../data/data.json'; // Assuming data.json is in the same directory
import styles from '../styles/CardContainer.module.css'

const CardsContainer = () => {
 
  return (
    <div  className={styles.cardscontainer}>
      {Object.keys(data).map((key) => (
        <CardComponent 
          key={key}
          img  ={data[key].img  }
          title={data[key].title}
          para={data[key].para}
          
       />
      ))}
    </div>
  );
};

export default CardsContainer;
