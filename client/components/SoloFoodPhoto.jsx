import React from 'react';

const SoloFoodPhoto = (props) => (
  <div className="solo-photo">
    <img className="solo-food-photo" src={props.photo.photo_url}></img>
  </div>
)

export default SoloFoodPhoto;