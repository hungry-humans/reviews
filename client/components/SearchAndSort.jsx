import React from 'react';

import styles from '../styles/SearchAndSort.css';

import SearchBar from './SearchBar.jsx';
import SortBar from './SortBar.jsx';

const SearchAndSort= (props) => {
  return (
    <div className={styles['search-and-sort']}>
      <SearchBar handleSearch={props.handleSearch}/>
      <SortBar handleSort={props.handleSort}/>
    </div>
  )
};

export default SearchAndSort;