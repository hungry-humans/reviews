import React from 'react';

import styles from '../styles/SoloFoodPhoto.css';

const SoloFoodPhoto = (props) => (
  <div className={styles['solo-photo']}>
    <img className={styles['solo-food-photo']} src={props.photos[0].photo_url}></img>
  </div>
)

export default SoloFoodPhoto;