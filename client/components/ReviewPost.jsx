import React from 'react';
import axios from 'axios';

import User from './User.jsx';
import Body from './Body.jsx';

class ReviewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review
    };
  }

  componentDidMount() {
    const firstAndLastName = this.props.review.username.split(' ');
    const abbrname = `${firstAndLastName[0]} ${firstAndLastName[1][0]}.`;

    axios.get(`http://localhost:3000/biz/${this.state.review.business_id}/reviews/${this.state.review.review_id}/photos`)
    .then((results) => {
      const newState = this.state.review;
      newState.abbrname = abbrname;
      newState.photos = results.data;
      this.setState(newState);
    });
  }

  render() {
    return (
      <div className="review-post-container">
        <User review={this.state.review} />
        <Body review={this.state.review} />
      </div>
    );
  }
};

export default ReviewPost;