import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortTerm: ''
    };
  }

  render() {
    return (
      <div className="sort-bar">
        <span className="sort-text">Sort by </span>
        <span className="sort-drop-down">
          <a href="#">
          <span>Yelp Sort</span>
          <span>
            <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 10.5a1 1 0 0 1-.7-.29l-3.06-3a1 1 0 1 1 1.41-1.42L8 8.1l2.35-2.31a1 1 0 0 1 1.41 1.42l-3.06 3a1 1 0 0 1-.7.29z"></path></svg>
          </span>
          </a>
        </span>
      </div>
    )
  }
};

export default SortBar;