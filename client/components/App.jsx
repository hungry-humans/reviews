import React from 'react';
import axios from 'axios';

import ReviewsList from './ReviewsList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/biz/9/reviews')
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <ReviewsList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
