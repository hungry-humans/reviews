import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ReviewsHeader from './ReviewsHeader.jsx';
import ReviewsList from './ReviewsList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      visibleReviews: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/biz/4/reviews')
      .then((results) => {
        this.setState({
          allReviews: results.data,
          visibleReviews: results.data
        });
      });
  }

  handleSearch(query) {
    const filteredReviews = this.state.allReviews.filter(review => review.body.includes(query));
    this.setState({
      visibleReviews: filteredReviews
    });
  }

  render() {
    return (
      <div>
        <ReviewsHeader handleSearch={this.handleSearch} />
        <ReviewsList reviews={this.state.visibleReviews} />
      </div>
    );
  }
}

export default App;
