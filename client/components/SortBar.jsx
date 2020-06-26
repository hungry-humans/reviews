import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortTerm: '',
    };
    this.handleSortSelectChange = this.handleSortSelectChange.bind(this);
  }

  handleSortSelectChange(event) {
    this.props.handleSort(event.target.value);
    this.setState({
      sortTeam: event.target.value
    });
  }

  render() {
    return (
      <div className="sort-bar">
        <span className="sort-text">Sort by </span>
        <span className="sort-drop-down">
          <select name="sort-select" id="sort-select" onChange={this.handleSortSelectChange}>
            <option value="yelpSort" defaultValue>Yelp Sort</option>
            <option value="newestFirst">Newest First</option>
            <option value="oldestFirst">Oldest First</option>
            <option value="highestRated">Highest Rated</option>
            <option value="lowestRated">Lowest Rated</option>
            <option value="elites">Elites</option>
          </select>
        </span>
      </div>
    )
  }
};

export default SortBar;