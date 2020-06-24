import React from 'react';

const SoloFoodPhoto = (props) => (
  <div className="solo-photo">
    <img className="solo-food-photo" src={props.photos[0].photo_url}></img>
  </div>
)

export default SoloFoodPhoto;