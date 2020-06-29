import React from 'react';

import styles from '../styles/WriteBox.css';

import WriteModal from './WriteModal.jsx';

function changeRatingToEmpty(event) {
  const ratingGroupClassList = document.getElementById('rating-group').classList;
  const ratingGroupClassArray= Array.prototype.slice.call(ratingGroupClassList);
  if (ratingGroupClassArray.indexOf(styles['rating-group-radio-1']) > -1) {
    ratingGroupClassList.remove(styles['rating-group-radio-1']);
  }
  if (ratingGroupClassArray.indexOf(styles['rating-group-radio-2']) > -1) {
    ratingGroupClassList.remove(styles['rating-group-radio-2']);
  }
  if (ratingGroupClassArray.indexOf(styles['rating-group-radio-3']) > -1) {
    ratingGroupClassList.remove(styles['rating-group-radio-3']);
  }
  if (ratingGroupClassArray.indexOf(styles['rating-group-radio-4']) > -1) {
    ratingGroupClassList.remove(styles['rating-group-radio-4']);
  }
  if (ratingGroupClassArray.indexOf(styles['rating-group-radio-5']) > -1) {
    ratingGroupClassList.remove(styles['rating-group-radio-5']);
  }
}

function changeRatingTo1Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add(styles['rating-group-radio-1']);
}

function changeRatingTo2Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add(styles['rating-group-radio-2']);
}

function changeRatingTo3Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add(styles['rating-group-radio-3']);
}

function changeRatingTo4Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add(styles['rating-group-radio-4']);
}

function changeRatingTo5Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add(styles['rating-group-radio-5']);
}

const handleOpenWriteModal = () => {
  document.getElementById('writeModal').style.display = 'block';
};

const handleCloseWriteModal = () => {
  document.getElementById('writeModal').style.display = 'none';
}

const WriteBox = (props) => (
  <div className={styles['write-box']}>
    <div className={styles['rating-container']}>
      <div id="rating-group" className={styles['rating-group-container-empty']} onClick={handleOpenWriteModal}>
        <form>
          <fieldset>
            <ul>
              <div className={styles['radio-1']} onMouseOver={changeRatingTo1Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="1" onMouseOver={changeRatingTo1Star}></input>
              </div>
              <div className={styles['radio-2']} onMouseOver={changeRatingTo2Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="2"></input>
              </div>
              <div className={styles['radio-3']} onMouseOver={changeRatingTo3Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="3"></input>
              </div>
              <div className={styles['radio-4']} onMouseOver={changeRatingTo4Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="4"></input>
              </div>
              <div className={styles['radio-5']} onMouseOver={changeRatingTo5Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="5"></input>
              </div>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
    <div className={styles['write-text-container']}>
      <a href="#" className={styles['write-text']} onClick={handleOpenWriteModal}>Start your review of {(props.review !== undefined) ? <span className={styles['write-business-name']}>{props.review.business_name}</span> : ''}.</a>
    </div>
    <WriteModal review={props.review} handleCloseWriteModal={handleCloseWriteModal} handleReviewSubmission={props.handleReviewSubmission}/>
  </div>
);

export default WriteBox;