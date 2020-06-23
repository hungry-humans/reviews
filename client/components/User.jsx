import React from 'react';

const User = ({ review }) => {
  const firstAndLastName = review.username.split(' ');
  const name = `${firstAndLastName[0]} ${firstAndLastName[1][0]}.`;

  return (
  <div className="user-info-container container">
    <div className="user-box-1">
      <img src={review.profile_photo} />
    </div>
    <div className="user-box-2">
      <div style={{fontWeight: "bold"}}><a href="#" className="username-anchor">{name}</a></div>
      <div style={{fontWeight: "bold"}}>{review.location}</div>
      <div>
        <span>img</span>
        <span style={{fontWeight: "bold"}}> {review.friends_count}</span> friends
      </div>
      <div>
        <span>img</span>
        <span style={{fontWeight: "bold"}}> {review.reviews_count}</span> reviews
      </div>
      <div>
        <span>img</span>
        <span style={{fontWeight: "bold"}}> {review.photos_count}</span> photos
      </div>
      {(review.elite) ? <div><a href="#" className="elite-anchor">Elite '2020</a></div> : <div></div>}
    </div>
  </div>
  )
};

export default User;