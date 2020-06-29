import React from 'react';

import styles from '../styles/BodyPhotosHeader.css';

const BodyPhotosHeader = ({ review }) => (
  <span className={styles['photos-header']}>
    <span className={styles['photos-svg-image']}>
      <svg className={styles['svg-image']} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M11.23 1A3.77 3.77 0 0 1 15 4.77v6.46A3.77 3.77 0 0 1 11.23 15H4.77a3.77 3.77 0 0 1-3.43-2.31l-.06-.06a3.61 3.61 0 0 1-.28-1.4V4.77A3.77 3.77 0 0 1 4.77 1h6.46zM3 4.77V11l5.73-5.44a1 1 0 0 1 1.38 0L13 8.3V4.77A1.77 1.77 0 0 0 11.23 3H4.77A1.77 1.77 0 0 0 3 4.77zM11.23 13A1.77 1.77 0 0 0 13 11.23v-.17l-3.58-3.4L4 12.81c.238.122.502.187.77.19h6.46zM5.02 6.83a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"></path>
      </svg>
    </span>
    <span className={styles['text']}> {review.photos.length} photos</span>
  </span>
);

export default BodyPhotosHeader;