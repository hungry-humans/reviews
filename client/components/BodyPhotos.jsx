import React from 'react';
import axios from 'axios';

import SoloFoodPhoto from './SoloFoodPhoto.jsx';
import DuoFoodPhotos from './DuoFoodPhotos.jsx';

class BodyPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/biz/${this.props.review.business_id}/reviews/${this.props.review.review_id}/photos`)
      .then((results) => {
        this.setState({
          photos: results.data,
        });
      });
  }

  render() {
    const firstAndLastName = this.props.review.username.split(' ');
    const name = `${firstAndLastName[0]} ${firstAndLastName[1][0]}.`;

    let photoContainer;
    if (this.state.photos.length === 1) {
      photoContainer = <SoloFoodPhoto photo={this.state.photos[0]} />
    } else if (this.state.photos.length === 2) {
      photoContainer = <DuoFoodPhotos photos={this.state.photos} />
    } else if (this.state.photos.length >= 3) {
      photoContainer = <div className="trio-photos">
        <SoloFoodPhoto photo={this.state.photos[0]} />
        <DuoFoodPhotos photos={[this.state.photos[1], this.state.photos[2]]} />
      </div>
    }

    return (
      <div className="body-photos">
        {photoContainer}
        {/* See all photos from Ajay H. for Tang 190 */}
        {(this.state.photos.length > 3) ? <div><a href="#" className="more-photos">See all photos from {name} for </a></div> : <div></div>}
      </div>
    )
  }
};

export default BodyPhotos;