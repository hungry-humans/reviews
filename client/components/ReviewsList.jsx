import React from 'react';

import ReviewPost from './ReviewPost.jsx';

const comparator = (a, b) => {
  a = Date.parse(a.created_at);
  b = Date.parse(b.created_at);
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
};

const ReviewsList = (props) => {
  return (
  <div id="reviews-list">
    {props.reviews.map(review => (
      <ReviewPost review={review} />
    ))}
  </div>
  )
};

export default ReviewsList;