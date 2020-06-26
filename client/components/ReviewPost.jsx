import React from 'react';
import axios from 'axios';

import User from './User.jsx';
import Body from './Body.jsx';

const ReviewPost = ({ review, handleReviewButtonClick }) => {
  const firstAndLastName = review.username.split(' ');
  review.abbrname = `${firstAndLastName[0]} ${firstAndLastName[1][0]}.`;
  return (
    <div className="review-post-container">
      <User review={review} />
      <Body review={review} handleReviewButtonClick={handleReviewButtonClick}/>
    </div>
  );
};

export default ReviewPost;