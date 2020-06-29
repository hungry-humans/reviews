import React from 'react';

import styles from '../styles/ExampleAndWrite.css';

import ExampleBox from './ExampleBox.jsx';
import WriteBox from './WriteBox.jsx';

const ExampleAndWrite = (props) => (
  <div className={styles['example-and-write']}>
    <ExampleBox />
    <WriteBox review={props.review} handleReviewSubmission={props.handleReviewSubmission}/>
  </div>
);

export default ExampleAndWrite;