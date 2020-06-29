import React from 'react';

import styles from '../styles/ReviewsHeader.css';

import SearchAndSort from './SearchAndSort.jsx';
import ExampleAndWrite from './ExampleAndWrite.jsx';

const ReviewsHeader = (props) => {
  return (
    <div id="reviews-header" className={styles['reviews-header']}>
      <div className={styles['header-text-wrapper']}>
        <h4 className={styles['header-text']}>Recommended Reviews</h4>
      </div>
      <SearchAndSort handleSearch={props.handleSearch} handleSort={props.handleSort}/>
      <ExampleAndWrite review={props.review} handleReviewSubmission={props.handleReviewSubmission}/>
    </div>
  )
};

export default ReviewsHeader;