import React from 'react';

import styles from '../styles/Body.css';

import BodyHeader from './BodyHeader.jsx';
import BodyPhotos from './BodyPhotos.jsx';
import BodyFooter from './BodyFooter.jsx';

const Body = ({ review, handleReviewButtonClick }) => (
  <div className={styles['body-info-container']}>
    <BodyHeader review={review} />
    <div>{review.body}</div>
    <BodyPhotos review={review} />
    <BodyFooter review={review} handleReviewButtonClick={handleReviewButtonClick} />
  </div>
);

export default Body;