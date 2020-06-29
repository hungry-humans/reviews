import React from 'react';

import styles from '../styles/ExampleBox.css';

const ExampleBox = (props) => (
  <div className={styles['example-box']}>
    <img src="https://7elp-photos.s3-us-west-1.amazonaws.com/empty_user_profile.png"></img>
  </div>
);

export default ExampleBox;