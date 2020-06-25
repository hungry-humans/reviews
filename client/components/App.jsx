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
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/biz/1/reviews')
      .then((results) => {
        this.setState({
          allReviews: results.data,
          visibleReviews: results.data
        });
        const getPhotos = results.data.map(review => {
          return axios.get(`http://localhost:3000/biz/1/reviews/${review.review_id}/photos`)
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
    const filteredReviews = this.state.allReviews.filter(review => review.body.toLowerCase().includes(query.toLowerCase()));
    this.setState({
      visibleReviews: filteredReviews
    });
  }

  handleSort(query) {
    let sortedReviews = this.state.allReviews.slice();
    if (query === 'newestFirst') {
      sortedReviews.sort(this.sortNewest);
    } else if (query === 'oldestFirst') {
      sortedReviews.sort(this.sortOldest);
    } else if (query === 'highestRated') {
      sortedReviews.sort(this.sortHighest);
    } else if (query === 'lowestRated') {
      sortedReviews.sort(this.sortLowest);
    } else if (query === 'elites') {
      sortedReviews.sort(this.sortElites);
    }
    this.setState({
      visibleReviews: sortedReviews
    });
  }

  sortNewest(a, b) {
    a = Date.parse(a.created_at);
    b = Date.parse(b.created_at);
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }

  sortOldest(a, b) {
    a = Date.parse(a.created_at);
    b = Date.parse(b.created_at);
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  sortHighest(a, b) {
    a = a.rating;
    b = b.rating;
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }

  sortLowest(a, b) {
    a = a.rating;
    b = b.rating;
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  sortElites(a, b) {
    a = a.elite;
    b = b.elite;
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    return (
      <div>
        <ReviewsHeader handleSearch={this.handleSearch} handleSort={this.handleSort} review={this.state.visibleReviews[0]} />
        <ReviewsList reviews={this.state.visibleReviews} photos={this.state.allPhotos}/>
      </div>
    );
  }
}

export default App;
