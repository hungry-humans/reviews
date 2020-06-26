import React from 'react';

import SearchAndSort from './SearchAndSort.jsx';
import ExampleAndWrite from './ExampleAndWrite.jsx';

const ReviewsHeader = (props) => {
  return (
    <div id="reviews-header">
      <div className="header-text-wrapper">
        <h4 className="header-text">Recommended Reviews</h4>
      </div>
      <SearchAndSort handleSearch={props.handleSearch} handleSort={props.handleSort}/>
      <ExampleAndWrite review={props.review}/>
    </div>
  )
};

export default ReviewsHeader;