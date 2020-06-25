import React from 'react';

import BodyHeader from './BodyHeader.jsx';
import BodyPhotos from './BodyPhotos.jsx';
import BodyFooter from './BodyFooter.jsx';

const Body = ({ review }) => (
  <div className="body-info-container">
    <BodyHeader review={review} />
    <div>{review.body}</div>
    <BodyPhotos review={review} />
    <BodyFooter review={review} />
  </div>
);

export default Body;