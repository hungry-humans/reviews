import React from 'react';
import axios from 'axios';

import styles from '../styles/ReviewPost.css';

import User from './User.jsx';
import Body from './Body.jsx';

const ReviewPost = ({ review, handleReviewButtonClick }) => {
  const firstAndLastName = review.username.split(' ');
  review.abbrname = `${firstAndLastName[0]} ${firstAndLastName[1][0]}.`;
  return (
    <div className={styles['review-post-container']}>
      <User review={review} />
      <Body review={review} handleReviewButtonClick={handleReviewButtonClick}/>
    </div>
  );
};

export default ReviewPost;