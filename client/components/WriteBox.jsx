import React from 'react';

function changeRatingToEmpty(event) {
  const ratingGroupClassList = document.getElementById('rating-group').classList;
  const ratingGroupClassArray= Array.prototype.slice.call(ratingGroupClassList);
  if (ratingGroupClassArray.indexOf('rating-group-radio-1') > -1) {
    ratingGroupClassList.remove('rating-group-radio-1');
  }
  if (ratingGroupClassArray.indexOf('rating-group-radio-2') > -1) {
    ratingGroupClassList.remove('rating-group-radio-2');
  }
  if (ratingGroupClassArray.indexOf('rating-group-radio-3') > -1) {
    ratingGroupClassList.remove('rating-group-radio-3');
  }
  if (ratingGroupClassArray.indexOf('rating-group-radio-4') > -1) {
    ratingGroupClassList.remove('rating-group-radio-4');
  }
  if (ratingGroupClassArray.indexOf('rating-group-radio-5') > -1) {
    ratingGroupClassList.remove('rating-group-radio-5');
  }
}

function changeRatingTo1Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add('rating-group-radio-1');
}

function changeRatingTo2Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add('rating-group-radio-2');
}

function changeRatingTo3Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add('rating-group-radio-3');
}

function changeRatingTo4Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add('rating-group-radio-4');
}

function changeRatingTo5Star(event) {
  const ratingGroup = document.getElementById('rating-group');
  ratingGroup.classList.add('rating-group-radio-5');
}

const WriteBox = (props) => (
  <div className="write-box">
    <div className="rating-container">
      <div id="rating-group" className="rating-group-container-empty">
        <form>
          <fieldset>
            <ul>
              <div className="radio-1" onMouseOver={changeRatingTo1Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="1" onMouseOver={changeRatingTo1Star}></input>
              </div>
              <div className="radio-2" onMouseOver={changeRatingTo2Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="2"></input>
              </div>
              <div className="radio-3" onMouseOver={changeRatingTo3Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="3"></input>
              </div>
              <div className="radio-4" onMouseOver={changeRatingTo4Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="4"></input>
              </div>
              <div className="radio-5" onMouseOver={changeRatingTo5Star} onMouseLeave={changeRatingToEmpty}>
                <input type="radio" name="rating" value="5"></input>
              </div>
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="write-text-container">
      <a href="#" className="write-text">Start your review of {(props.review !== undefined) ? <span className="write-business-name">{props.review.business_name}</span> : ''}.</a>
    </div>
  </div>
);

export default WriteBox;