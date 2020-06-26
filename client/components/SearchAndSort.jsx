import React from 'react';

import SearchBar from './SearchBar.jsx';
import SortBar from './SortBar.jsx';

const SearchAndSort= (props) => {
  return (
    <div className="search-and-sort">
      <SearchBar handleSearch={props.handleSearch}/>
      <SortBar handleSort={props.handleSort}/>
    </div>
  )
};

export default SearchAndSort;