import React from 'react';

import User from './User.jsx';
import Body from './Body.jsx';

const ReviewPost = ({review}) => (
  <div className="review-post-container">
    <User review={review} />
    <Body review={review} />
  </div>
);

export default ReviewPost;