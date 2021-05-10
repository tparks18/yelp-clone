import React from 'react'
import styles from './SearchBar.module.css'

function SearchBar() {
    return (
      <div>
        <div className="field has-addons">
          <p className="control">
            <button className="button is-static is-medium">
              <b>Search</b>
            </button>
          </p>
          <p className="control">
            <input
              className={`input is-medium ${styles["input-control"]}`}
              type="text"
              placeholder="plumbers, delivery, takeout..."
            />
          </p>
          <p className="control">
            <button className="button is-static is-medium">
              <b>Near</b>
            </button>
          </p>
          <p className="control">
            <input
              className={`input is-medium ${styles['input-control']}`}
              type="text"
              placeholder="Where"
            />
          </p>
          <div className={`button is-medium ${styles['search-button']}`}>
            <span className={`icon is-small ${styles['search-icon']}`}>
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    );
}

export default SearchBar
