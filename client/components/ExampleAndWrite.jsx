import React from 'react';

import ExampleBox from './ExampleBox.jsx';
import WriteBox from './WriteBox.jsx';

const ExampleAndWrite = (props) => (
  <div className="example-and-write">
    <ExampleBox />
    <WriteBox review={props.review}/>
  </div>
);

export default ExampleAndWrite;