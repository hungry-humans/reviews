import React from 'react';

import styles from '../styles/BodyPhotos.css';

import SoloFoodPhoto from './SoloFoodPhoto.jsx';
import DuoFoodPhotos from './DuoFoodPhotos.jsx';

const BodyPhotos = ({ review }) => {
  let photoContainer = <div></div>

  if (review.photos !== undefined) {
    if (review.photos.length === 1) {
      photoContainer = (
        <SoloFoodPhoto photos={review.photos} />
      )
    } else if (review.photos.length === 2) {
      photoContainer = (
        <DuoFoodPhotos photos={review.photos} />
      )
    } else if (review.photos.length >= 3) {
      photoContainer = (
        <div className={styles['trio-photos']}>
          <SoloFoodPhoto photos={review.photos} />
          <DuoFoodPhotos photos={review.photos.slice(1)} />
        </div>
      )
    }
  }

  return (
    <div className={styles['body-photos']}>
      {photoContainer}
      {(review.photos !== undefined && review.photos.length > 3) ? <div><a href="#" className={styles['more-photos']}>See all photos from {review.abbrname} for {review.business_name}</a></div> : <div></div>}
    </div>
  )
};

export default BodyPhotos;