import React from 'react';

import UsefulButton from './UsefulButton.jsx';
import FunnyButton from './FunnyButton.jsx';
import CoolButton from './CoolButton.jsx';

const BodyFooter = ({ review }) => (
  <div className="footer-info">
    <UsefulButton review={review} />
    <FunnyButton review={review} />
    <CoolButton review={review} />
  </div>
);

export default BodyFooter;