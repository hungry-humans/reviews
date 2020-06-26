import React from 'react';

class UsefulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.review.useful_active,
      useful_count: this.props.review.useful_count
    };
    this.handleToggleStateClick = this.handleToggleStateClick.bind(this);
  }

  handleToggleStateClick() {
    const newActive = !this.state.active;
    console.log(newActive);
    const action = (newActive) ? 'increment' : 'decrement';
    this.props.handleReviewButtonClick(this.props.review, 'useful_count', action, 'useful_active', newActive);
    this.setState({
      active: newActive,
      useful_count: (newActive) ? this.state.useful_count + 1 : this.state.useful_count - 1
    });
  }

  render() {
    console.log(this.props.review);
    return (
      <button type="button" className="review-btn" onClick={this.handleToggleStateClick}>
        <div>
          <span className="footer-svg-image">
            {(this.props.review.useful_active) ?
              <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 16h2v1h-2v-1zm1-15a11 11 0 0 1 11 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm3 14.44a5.58 5.58 0 1 0-6 0V17a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1.56zm-3-8.26A3.57 3.57 0 0 1 13.56 14h-3.12A3.57 3.57 0 0 1 12 7.18z"></path></svg> : <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1a11 11 0 0 1 11 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-15.82a5.56 5.56 0 0 1 3 10.26V17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.56a5.56 5.56 0 0 1 3-10.26zM11 17h2v-1h-2v1zm2.56-3a3.58 3.58 0 1 0-3.12 0h3.12z"></path></svg>
            }
          </span>
          <span className="footer-text" style={(this.props.review.useful_active) ? {fontWeight: "bold"} : {}}> Useful </span>
          {(this.props.review.useful_count > 0) ? <span className="footer-text" style={{fontWeight: "bold"}}>{this.props.review.useful_count}</span> : <span className="footer-text"></span>}
        </div>
      </button>
    )
  }
};

export default UsefulButton;