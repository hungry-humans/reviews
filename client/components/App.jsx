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
      visibleReviews: [],
      allPhotos: []
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
        const reviews = results.data;
        const getPhotos = reviews.map(review => {
          return axios.get(`http://localhost:3000/biz/4/reviews/${review.review_id}/photos`)
            .then(results => {
              return results;
            });
        });
        Promise.all(getPhotos)
          .then(results => {
            let allPhotos = [];
            for (let i = 0; i < results.length; i++) {
              allPhotos = allPhotos.concat(results[i].data);
            }
            this.setState({
              allPhotos
            });
          });
      });
  }

  handleSearch(query) {
    const filteredReviews = this.state.allReviews.filter(review => review.body.toLowerCase().includes(query));
    this.setState({
      visibleReviews: filteredReviews
    });
  }

  render() {
    return (
      <div>
        <ReviewsHeader handleSearch={this.handleSearch} review={this.state.visibleReviews[0]}/>
        <ReviewsList reviews={this.state.visibleReviews} photos={this.state.allPhotos}/>
      </div>
    );
  }
}

export default App;
