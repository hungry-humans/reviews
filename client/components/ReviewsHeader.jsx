import React from 'react';

import SearchAndSort from './SearchSortRow.jsx';

const ReviewsHeader = (props) => {
  return (
    <div id="reviews-header">
      <div className="header-text-wrapper">
        <h4 className="header-text">Recommended Reviews</h4>
      </div>
      <SearchAndSort handleSearch={props.handleSearch}/>
    </div>
  )
};

export default ReviewsHeader;