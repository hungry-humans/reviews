import React from 'react';

import styles from '../styles/DuoFoodPhotos.css';

const DuoFoodPhotos = (props) => (
  <div className={styles['duo-photos']}>
    <div className={styles['duo-food-wrapper']}>
      <img className={styles['duo-food-photo']} src={props.photos[0].photo_url}></img>
    </div>
    <div className={styles['duo-food-wrapper']}>
      <img className={styles['duo-food-photo']} src={props.photos[1].photo_url}></img>
    </div>
  </div>
);

export default DuoFoodPhotos;