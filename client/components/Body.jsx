import React from 'react';

const Body = ({ review }) => (
  <div className="body-info container">
    <div>{review.created_at}</div>
    <div>{review.body}</div>
  </div>
);

export default Body;