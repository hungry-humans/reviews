import React from 'react';

import SearchBar from './SearchBar.jsx';
import SortBar from './SortBar.jsx';

const SearchAndSort= (props) => {
  return (
    <div className="search-sort-row">
      <SearchBar handleSearch={props.handleSearch}/>
      <SortBar />
    </div>
  )
};

export default SearchAndSort;