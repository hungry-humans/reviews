import React from 'react';
import moment from 'moment';

import BodyPhotosHeader from './BodyPhotosHeader.jsx';
import BodyCheckinsHeader from './BodyCheckinsHeader.jsx';

const BodyHeader = ({ review }) => {
  let photosCheckinsContainer = <div></div>;

  if (review.photos !== undefined && review.photos.length > 0 && review.check_ins !== 0) {
    photosCheckinsContainer = (
      <div className="photos-checkins">
        <BodyPhotosHeader review={review} />
        <BodyCheckinsHeader review={review} />
      </div>
    )
  } else if (review.photos !== undefined && review.photos.length > 0) {
    photosCheckinsContainer = (
      <div className="photos-checkins">
        <BodyPhotosHeader review={review} />
      </div>
    )
  } else if (review.checkins !== 0) {
    photosCheckinsContainer = (
      <div className="photos-checkins">
        <BodyCheckinsHeader review={review} />
      </div>
    )
  }

  return (
    <div className="header-info">
      <div className="rating-info">
        <span className={`body-rating-image body-rating-image-${review.rating.toString().replace('.', '-')}`}></span>
        <span className="body-date"> {moment(review.created_at).format('M/D/YYYY')}</span>
      </div>
      {photosCheckinsContainer}
    </div>
  )
};

export default BodyHeader;