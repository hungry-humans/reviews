import React from 'react';

class CoolButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.review.cool_active
    };
    this.handleToggleStateClick = this.handleToggleStateClick.bind(this);
  }

  handleToggleStateClick() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <button type="button" className="review-btn" onClick={this.handleToggleStateClick}>
        <div>
          <span className="footer-svg-image">
            {(this.state.active) ?
              <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0 0 12 1zm4.56 15.58A5.71 5.71 0 0 1 12 19a5.71 5.71 0 0 1-4.56-2.42.25.25 0 0 1 .26-.39 16.3 16.3 0 0 0 8.6 0 .25.25 0 0 1 .26.39zm2.92-6l-.85 2.53a3 3 0 0 1-5.6 0l-.28-.85a.79.79 0 0 0-1.5 0l-.28.85a3 3 0 0 1-5.6 0l-.85-2.53a.43.43 0 0 1 .41-.58h14.14a.43.43 0 0 1 .41.56v.02z"></path></svg> : <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a11 11 0 0 1-11 11zm0-20a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-7.48 7.56a.43.43 0 0 1 .41-.56h14.14a.43.43 0 0 1 .41.56l-.85 2.53a3 3 0 0 1-2.8 2 3 3 0 0 1-2.8-2l-.28-.85a.8.8 0 0 0-.75-.54.8.8 0 0 0-.75.54l-.28.85a3 3 0 0 1-2.8 2 3 3 0 0 1-2.8-2l-.85-2.53zm3.18 5.63a16.3 16.3 0 0 0 8.6 0 .25.25 0 0 1 .26.39A5.71 5.71 0 0 1 12 19a5.71 5.71 0 0 1-4.56-2.42.25.25 0 0 1 .26-.39z"></path></svg>
            }
          </span>
          <span className="footer-text" style={(this.state.active) ? {fontWeight: "bold"} : {}}> Cool </span>
          {(this.props.review.cool_count > 0) ? <span className="footer-text" style={{fontWeight: "bold"}}>{this.props.review.cool_count}</span> : <span className="footer-text"></span>}
        </div>
      </button>
    )
  }
}

export default CoolButton;