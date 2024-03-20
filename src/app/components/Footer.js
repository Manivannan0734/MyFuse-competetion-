import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1 style={{color:"rgb(255,207,150)"}}>Join Our Newsletter</h1>
      <h3>"Stay in the loop and never miss out on our latest updates and exclusive content. Subscribe to our newsletter to receive fresh insights and news delivered right to your inbox."</h3>
    
      <input type="text" style={{ borderRadius: '20px',width:"50%",height:"2rem" }}  /> {/* Adjust value for desired radius */}
      <input type="submit" style={{ borderRadius: '20px',width:"100px",height:"2.3rem",marginTop:"0.2rem",backgroundColor:"rgb(71,178,228)"   }}  /> {/* Adjust value for desired radius */}
      <div className={styles.content}>
        <h1>MyFuse<span style={{color:'red'}}> .</span>In <p style={{listStyle:"none",fontSize:"medium"}}> Unlock endless career possibilities <br/> with Myfuse – the platform that bridges gap between <br/> Students and Job opportunities in India..</p> </h1> 
        <h2>Useful Links </h2>    <li > Home</li> <li> About us </li><li> Login</li><li>Terms of services </li> <li>Policies</li>
        <h2>Our Servicess </h2>   <li > Application</li> <li>Legal Policy </li><li> System</li><li>About </li> <li>FAQ</li> 
        <h2>Contact Us </h2>  <p style={{listStyle:"none",fontSize:"medium"}}>MyFuse.in Residency Rd, Shanthala Nagar
Ashok Nagar, Bengaluru
Karnataka 560025</p>
      </div>
    </div>
  );
};

export default Footer;
