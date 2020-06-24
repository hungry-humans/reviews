import React from 'react';

const DuoFoodPhotos = (props) => (
  <div className="duo-photos">
    <div className="duo-food-wrapper">
      <img className="duo-food-photo" src={props.photos[0].photo_url}></img>
    </div>
    <div className="duo-food-wrapper">
      <img className="duo-food-photo" src={props.photos[1].photo_url}></img>
    </div>
  </div>
);

export default DuoFoodPhotos;