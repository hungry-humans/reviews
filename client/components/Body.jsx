import React from 'react';
import moment from 'moment';

const Body = ({ review }) => (
  <div className="body-info container">
    <div>{moment(review.created_at).format('M/D/YYYY')}</div>
    <div>{review.body}</div>
  </div>
);

export default Body;