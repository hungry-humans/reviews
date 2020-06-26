import React from 'react';

import UsefulButton from './UsefulButton.jsx';
import FunnyButton from './FunnyButton.jsx';
import CoolButton from './CoolButton.jsx';

const BodyFooter = ({ review, handleReviewButtonClick}) => (
  <div className="footer-info">
    <UsefulButton review={review} handleReviewButtonClick={handleReviewButtonClick} />
    <FunnyButton review={review} handleReviewButtonClick={handleReviewButtonClick} />
    <CoolButton review={review} handleReviewButtonClick={handleReviewButtonClick} />
  </div>
);

export default BodyFooter;