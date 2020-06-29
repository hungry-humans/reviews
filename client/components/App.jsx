import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from '../styles/App.css';

import ReviewsHeader from './ReviewsHeader.jsx';
import ReviewsList from './ReviewsList.jsx';
import Pagination from './Pagination.jsx';
import WriteBox from './WriteBox.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      visibleReviews: [],
      allPhotos: [],
      currentPage: 1,
      postsPerPage: 3
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.handlePaginationRightClick = this.handlePaginationRightClick.bind(this);
    this.handlePaginationLeftClick = this.handlePaginationLeftClick.bind(this);
    this.handleReviewButtonClick = this.handleReviewButtonClick.bind(this);
    this.handleReviewSubmission = this.handleReviewSubmission.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/biz/1/reviews')
      .then(results => {
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

  handlePagination(number) {
    this.setState({
      currentPage: number
    });
  }

  handlePaginationLeftClick(firstPage) {
    if (this.state.currentPage > firstPage) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }
  }

  handlePaginationRightClick(lastPage) {
    if (this.state.currentPage < lastPage) {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  handleReviewButtonClick(review, count, action, type, active) {
    axios.put(`http://localhost:3000/biz/${review.business_id}/reviews/${review.review_id}/${count}/${action}/${type}/${active}`)
      .then(result => {
        let updateCount;
        let updateActive;
        if (count === 'useful_count') {
          updateCount = 'useful_count';
          updateActive = 'useful_active';
        } else if (count === 'funny_count') {
          updateCount = 'funny_count';
          updateActive = 'funny_active';
        } else {
          updateCount = 'cool_count';
          updateActive = 'cool_active';
        }

        for (let i = 0; i < this.state.allReviews.length; i++) {
          if (this.state.allReviews[i].review_id === review.review_id) {
            if (action === 'increment') {
              this.state.allReviews[i][updateCount] = this.state.allReviews[i][updateCount] + 1;
            } else {
              this.state.allReviews[i][updateCount] = this.state.allReviews[i][updateCount] - 1;
            }
            this.state.allReviews[i][updateActive]= active;
          }
        }

        this.setState({
          allReviews: this.state.allReviews
        })
      });
  }

  handleReviewSubmission(review, body) {
    const obj = {
      user_id: 1,
      business_id: review.business_id,
      business_name: review.business_name,
      created_at: Date.now(),
      rating: 4,
      check_ins: 0,
      body: body,
      useful_count: 0,
      funny_count: 0,
      cool_count: 0,
      useful_active: false,
      funny_active: false,
      cool_active: false
    };
    axios.post(`http://localhost:3000/biz/${review.business_id}/reviews`, obj)
      .then(result => console.log(result));
  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.visibleReviews.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className={styles.app}>
        <ReviewsHeader handleSearch={this.handleSearch} handleSort={this.handleSort} handleReviewSubmission={this.handleReviewSubmission} review={this.state.visibleReviews[0]}/>
        <ReviewsList reviews={currentPosts} photos={this.state.allPhotos} handleReviewButtonClick={this.handleReviewButtonClick}/>
        <Pagination currentPage={this.state.currentPage} postsPerPage={this.state.postsPerPage} totalPosts={this.state.visibleReviews.length} handlePagination={this.handlePagination} handlePaginationLeftClick={this.handlePaginationLeftClick}handlePaginationRightClick={this.handlePaginationRightClick}/>
      </div>
    );
  }
}

export default App;
