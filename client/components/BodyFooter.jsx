import React from 'react';

const BodyFooter = ({ review }) => (
  <div className="footer-info">
    <button type="button" className="review-btn">
      <div>
        <span className="footer-svg-image">
          <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1a11 11 0 0 1 11 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-15.82a5.56 5.56 0 0 1 3 10.26V17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.56a5.56 5.56 0 0 1 3-10.26zM11 17h2v-1h-2v1zm2.56-3a3.58 3.58 0 1 0-3.12 0h3.12z"></path></svg>
        </span>
        <span className="footer-text"> Useful </span>
        {(review.useful_count > 0) ? <span className="footer-text" style={{fontWeight: "bold"}}>{review.useful_count}</span> : <span className="footer-text"></span>}
      </div>
    </button>
    <button type="button" className="review-btn">
      <div>
        <span className="footer-svg-image">
          <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a11 11 0 0 1-11 11zm0-20a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-4.5 8a1.5 1.5 0 0 1 3 0h-3zm6 0a1.5 1.5 0 0 1 3 0h-3zm-7.21 2h11.46a.26.26 0 0 1 .25.29c-.57 3.25-3 5.71-6 5.71s-5.43-2.46-5.96-5.71a.26.26 0 0 1 .25-.29z"></path></svg>
        </span>
        <span className="footer-text"> Funny </span>
        {(review.funny_count > 0) ? <span className="footer-text" style={{fontWeight: "bold"}}>{review.funny_count}</span> : <span className="footer-text"></span>}
      </div>
    </button>
    <button type="button" className="review-btn">
      <div>
        <span className="footer-svg-image">
          <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a11 11 0 0 1-11 11zm0-20a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-7.48 7.56a.43.43 0 0 1 .41-.56h14.14a.43.43 0 0 1 .41.56l-.85 2.53a3 3 0 0 1-2.8 2 3 3 0 0 1-2.8-2l-.28-.85a.8.8 0 0 0-.75-.54.8.8 0 0 0-.75.54l-.28.85a3 3 0 0 1-2.8 2 3 3 0 0 1-2.8-2l-.85-2.53zm3.18 5.63a16.3 16.3 0 0 0 8.6 0 .25.25 0 0 1 .26.39A5.71 5.71 0 0 1 12 19a5.71 5.71 0 0 1-4.56-2.42.25.25 0 0 1 .26-.39z"></path></svg>
        </span>
        <span className="footer-text"> Cool </span>
        {(review.cool_count > 0) ? <span className="footer-text" style={{fontWeight: "bold"}}>{review.cool_count}</span> : <span className="footer-text"></span>}
        </div>
    </button>
  </div>
);

export default BodyFooter;