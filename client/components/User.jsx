import React from 'react';

import styles from '../styles/User.css';

const User = ({ review }) => (
  <div className={styles['user-info-container']}>
    <div className={styles['user-box-1']}>
      <img src={review.profile_photo} />
    </div>
    <div className={styles['user-box-2']}>
      <div className={styles['bold-text']}>
        <a href="#" className={styles['username-anchor']}>{review.abbrname}</a>
      </div>
      <div className={styles['bold-text']}>{review.location}</div>
      <div>
        <span className={styles['svg-image']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g><path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path><path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" opacity=".502"></path></g></svg>
        </span>
        <span className={styles['bold-text']}> {review.friends_count}</span> friends
      </div>
      <div>
        <span className={styles['svg-image']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z"></path></svg>
        </span>
        <span className={styles['bold-text']}> {review.reviews_count}</span> reviews
      </div>
      <div>
        <span className={styles['svg-image']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
        </span>
        <span className={styles['bold-text']}> {review.photos_count}</span> photos
      </div>
      {(review.elite) ? <div><a href="#" className={styles['elite-anchor']}>Elite '2020</a></div> : <div></div>}
    </div>
  </div>
);

export default User;