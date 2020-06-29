import React from 'react';

import styles from '../styles/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }

  handleSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  handleSearchButtonClick(event) {
    this.props.handleSearch(this.state.searchText);
  }

  render() {
    return (
      <div className={styles['search-bar']}>
        <div className={styles['search-query-wrapper']}>
          <input type="text" name="search-query" className={styles['search-query']} placeholder="Search within reviews" onChange={this.handleSearchTextChange}></input>
        </div>
        <div className={styles['search-btn-wrapper']}>
          <button name="search-btn" className={styles['search-btn']} onClick={this.handleSearchButtonClick}>
            <span>
              <svg className={styles['svg-icon']} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.46 21.05l-3.72-3.72a10 10 0 1 0-1.41 1.41l3.72 3.72a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zM5.34 16.66A8 8 0 1 1 16.66 5.353 8 8 0 0 1 5.34 16.66z"></path></svg>
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default SearchBar;