import React from 'react';

import styles from '../styles/ReviewsList.css';

import ReviewPost from './ReviewPost.jsx';

const ReviewsList = (props) => {
  return (
  <div id="reviews-list" className={styles['reviews-list']}>
    {props.reviews.map(review => {
      review.photos = props.photos.filter(photo => {
        return photo.review_id === review.review_id;
      });
      return <ReviewPost review={review} handleReviewButtonClick={props.handleReviewButtonClick}/>
    })}
  </div>
  )
};

export default ReviewsList;