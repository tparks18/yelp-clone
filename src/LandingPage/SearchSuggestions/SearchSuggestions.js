import React from 'react';
import styles from './SearchSuggestions.module.css';

function SearchSuggestions() {
    return (
      <div className={styles.suggestions}>
        <span className="icon is-small">
          <i className="fas fa-utensils"></i>
        </span>
        <span className={styles.suggestion}>Restaurants</span>

        <span className="icon is-small">
          <i className="fas fa-glass-martini-alt"></i>
        </span>
        <span className={styles.suggestion}>Bars</span>

        <span className="icon is-small">
          <i className="fas fa-concierge-bell"></i>
        </span>
        <span className={styles.suggestion}>Services</span>

        <span className="icon is-small">
          <i className="fas fa-truck-loading"></i>
        </span>
        <span className={styles.suggestion}>Delivery Services</span>
      </div>
    );
}

export default SearchSuggestions
