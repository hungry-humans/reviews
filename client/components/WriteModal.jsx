import React from 'react';

import styles from '../styles/WriteModal.css';

const WriteModal = (props) => {
  const handleSubmitButtonClick = (review) => {
    const body = document.getElementById('review-post').value;
    const rating = document.getElementById('review-rating').value;
    props.handleReviewSubmission(review, body, rating);
    props.handleCloseWriteModal();
  };

  return (
    <div id="writeModal" className={styles['modal']}>
      <div className={styles['write-modal-container']}>
        <div className={styles['write-modal-header']}>
          <div className={styles['write-modal-header-container']}>
            <div className={styles['write-modal-header-left']}>
              <div className={styles['close-button']} onClick={props.handleCloseWriteModal}>&times;</div>
            </div>
            <div className={styles['write-modal-header-right']}>
              <div className={styles['log-in-button']}>Log In</div>
              <div className={styles['sign-up-button']}>Sign Up</div>
            </div>
          </div>
        </div>
        <div className={styles['write-modal-body']}>
          <div className={styles['write-modal-title-wrapper']} >
            <a className={styles['title']} onClick={props.handleCloseWriteModal}>{(props.review !== undefined) ? props.review.business_name : ''}</a>
            <div className={styles['write-modal-review-rating']}>
              <label>Rating: </label>
              <input type="text" id="review-rating"name="review-rating" placeholder="1-5"></input>
            </div>
          </div>
          <div className={styles['write-modal-review']}>
            <textarea id="review-post" className={styles["review-post"]} name="review-post" rows="10" cols="30" placeholder="Doesn't look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There's about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed."></textarea>
          </div>
          <div className={styles['post-review-wrapper']}>
            <div className={styles['post-review-button']} onClick={() => handleSubmitButtonClick(props.review)}>
              <div className={styles['text']}>Post Review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WriteModal;
