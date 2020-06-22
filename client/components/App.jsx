import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/biz/1/reviews')
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default App;
