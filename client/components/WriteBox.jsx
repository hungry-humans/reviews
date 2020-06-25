import React from 'react';

const WriteBox = (props) => (
  <div className="write-box">
    <div className="rating-container">
      Hello World!
    </div>
    <div className="write-text-container">
      <a href="#" className="write-text">Start your review of {(props.review !== undefined) ? <span className="write-business-name">{props.review.business_name}</span> : ''}.</a>
    </div>
  </div>
);

export default WriteBox;