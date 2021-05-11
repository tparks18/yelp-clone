import React from 'react';
import logo from '../assets/yelp-logo-transparent-background-4.png'
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';


export function NavBar() {
    return (
      <div className={styles["nav-bar"]}>
        <Link to='/'>
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <SearchBar small />
        <button className={`button ${styles["nav-button"]}`}>Sign In</button>
        <button className={`button ${styles["nav-button"]}`}>Register</button>
      </div>
    );
}


