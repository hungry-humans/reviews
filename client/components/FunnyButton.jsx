import React from 'react';

import styles from '../styles/ReviewButton.css';

const FunnyButton = (props) => {
  const handleToggleStateClick = () => {
    const newActive = !props.review.funny_active;
    const action = (newActive) ? 'increment' : 'decrement';
    props.handleReviewButtonClick(props.review, 'funny_count', action, 'funny_active', newActive);
  }

  return (
    <button type="button" className={styles['review-btn']} onClick={handleToggleStateClick}>
      <div>
        <span className={styles['footer-svg-image']}>
          {(props.review.funny_active) ?
            <svg className={styles['svg-image']} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0 0 12 1zm3 8.5a1.5 1.5 0 0 1 1.5 1.5h-3A1.5 1.5 0 0 1 15 9.5zm-6 0a1.5 1.5 0 0 1 1.5 1.5h-3A1.5 1.5 0 0 1 9 9.5zm3 9.5c-3 0-5.43-2.46-6-5.71a.26.26 0 0 1 .29-.29h11.42a.26.26 0 0 1 .25.29C17.43 16.54 15 19 12 19z"></path></svg> : <svg className={styles['svg-image']} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a11 11 0 0 1-11 11zm0-20a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-4.5 8a1.5 1.5 0 0 1 3 0h-3zm6 0a1.5 1.5 0 0 1 3 0h-3zm-7.21 2h11.46a.26.26 0 0 1 .25.29c-.57 3.25-3 5.71-6 5.71s-5.43-2.46-5.96-5.71a.26.26 0 0 1 .25-.29z"></path></svg>
          }
        </span>
        <span className={styles['footer-text']} style={(props.review.funny_active) ? {fontWeight: "bold"} : {}}> Funny </span>
        {(props.review.funny_count > 0) ? <span className={styles['footer-text']} style={{fontWeight: "bold"}}>{props.review.funny_count}</span> : <span className={styles['footer-text']}></span>}
      </div>
    </button>
  )
}

export default FunnyButton;