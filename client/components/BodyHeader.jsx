import React from 'react';
import moment from 'moment';

import styles from '../styles/BodyHeader.css';

import BodyPhotosHeader from './BodyPhotosHeader.jsx';
import BodyCheckinsHeader from './BodyCheckinsHeader.jsx';

const BodyHeader = ({ review }) => {
  let photosCheckinsContainer = <div></div>;

  if (review.photos !== undefined && review.photos.length > 0 && review.check_ins !== 0) {
    photosCheckinsContainer = (
      <div className={styles['photos-checkins']}>
        <BodyPhotosHeader review={review} />
        <BodyCheckinsHeader review={review} />
      </div>
    )
  } else if (review.photos !== undefined && review.photos.length > 0) {
    photosCheckinsContainer = (
      <div className={styles['photos-checkins']}>
        <BodyPhotosHeader review={review} />
      </div>
    )
  } else if (review.checkins !== 0) {
    photosCheckinsContainer = (
      <div className={styles['photos-checkins']}>
        <BodyCheckinsHeader review={review} />
      </div>
    )
  }

  return (
    <div className={styles['header-info']}>
      <div className={styles['rating-info']}>
        <span className={styles[`body-rating-image-${review.rating.toString().replace('.', '-')}`]}></span>
        <span className={styles['body-date']}> {moment(review.created_at).format('M/D/YYYY')}</span>
      </div>
      {photosCheckinsContainer}
    </div>
  )
};

export default BodyHeader;