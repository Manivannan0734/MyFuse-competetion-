// Header.jsx

import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.container}>
        <h4 className={styles.h1}>MyFuse<span style={{ color: "red" }} >.</span>In</h4>
        <nav className={styles.nav}>
          <Link href="#" passHref>Home</Link>
          <Link href="#" passHref>Jobs</Link>
          <Link href="#" passHref>Sign In</Link>
          <Link href="#" passHref>About Us</Link>
          <Link href="#" passHref>Blogs</Link>
          <Link href="#" passHref></Link>
        </nav>
    </div>
  );
};

export default Header;
