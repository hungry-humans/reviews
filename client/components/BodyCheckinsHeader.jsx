import React from 'react';

import styles from '../styles/BodyCheckinsHeader.css';

const BodyCheckinsHeader = ({ review }) => (
  <span className={styles['check-in-header']}>
    <span className={styles['check-in-svg-image']}>
      <svg className={styles['svg-image']} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M7.92 14.88a.93.93 0 0 1-.57-.19L6 13.76H4.43a1 1 0 0 1-.95-.68L3 11.57l-1.3-.94a1 1 0 0 1-.37-1.11L1.77 8l-.5-1.52a1 1 0 0 1 .35-1.12l1.29-.96.49-1.53a1 1 0 0 1 .94-.7H6l1.29-1a1 1 0 0 1 1.17 0l1.31.93h1.61a1 1 0 0 1 .95.68l.51 1.52 1.31.94a1 1 0 0 1 .37 1.11L14 7.9l.5 1.53a1 1 0 0 1-.35 1.11l-1.29 1-.5 1.46a1 1 0 0 1-.94.7H9.81l-1.29.95a1 1 0 0 1-.6.23zm-1.57-3.12a1 1 0 0 1 .58.19l1 .7 1-.72a1 1 0 0 1 .58-.19h1.2l.29-1.16c.068-.2.193-.373.36-.5l1-.72L12 8.22a1 1 0 0 1 0-.61l.35-1.15-1-.7a1.11 1.11 0 0 1-.35-.49l-.38-1.15H9.4a1 1 0 0 1-.57-.19l-1-.69-.96.76a1 1 0 0 1-.58.19H5.08l-.36 1.12a1 1 0 0 1-.36.5l-1 .72.38 1.14c.06.2.06.41 0 .61l-.33 1.15 1 .71a.93.93 0 0 1 .36.49l.39 1.14 1.19-.01zm.85-1.35a1 1 0 0 1-.71-.29L5.42 9.05a1 1 0 0 1 1.41-1.41L7.2 8l1.72-1.73a1 1 0 0 1 1.41 1.42L7.9 10.12a1 1 0 0 1-.7.29z"></path>
      </svg>
    </span>
    <span className={styles['text']}> {review.check_ins} check-ins</span>
  </span>
);

export default BodyCheckinsHeader;