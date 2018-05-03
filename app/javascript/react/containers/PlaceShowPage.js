import React, { Component } from 'react';
import Review from '../components/review';
import FormContainer from './FormContainer';
import Dropzone from 'react-dropzone'


class PlaceShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: {},
      reviews: [],
      userId: '',
      placeId: this.props.params.id,
      file: []
    }
    this.addNewReview = this.addNewReview.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    let placeId = this.state.placeId
    fetch(`/api/v1/places/${placeId}.json`, {
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          place: body.place,
          userId: body.user_id,
          reviews: body.reviews
        });
      })
      .catch(error => console.error (`Error in fetch: ${error.message}`));
  }

  addNewReview(formPayload) {
    let placeId = this.state.placeId
    fetch(`/api/v1/places/${placeId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState ({
        reviews: this.state.reviews.concat(body)
      })
    })
  }


  onDrop(event) {
    let newAvatar = event.target.value
      this.setState({ file: newAvatar })
  }

  render () {

    console.log(this.state)

    let reviews = this.state.reviews.map((review) => {
      return(
        <Review
          key={review.id}
          title={review.title}
          rating={review.rating}
          date={review.created_at}
          body={review.body}
        />
      )
    })

    let photos;

    if(this.state.place.avatar) {
      photos = <img src={this.state.place.avatar.url} />
    }

    return(
      <div>
        <h2>{this.state.place.name}</h2>
        <div className="clearfix">
          <div className="photos clearfix">
            <p>{photos}</p>
          </div>
          <div className="place-info">
            <ul>
              <li className="address">Location:</li>
              <li>{this.state.place.street_address}, {this.state.place.city}, MA {this.state.place.zip}</li>
              <li className="description">Description:</li>
              <li>{this.state.place.description}</li>
            </ul>
          </div>
        </div>
        <div className="submitted-reviews">
        <h3>Reviews:</h3>
          {reviews}

        <FormContainer
          addNewReview={this.addNewReview}
          placeId={this.state.place.id}
          userId={this.state.userId}
        />
      </div>
    </div>
    )
  }
}

export default PlaceShowPage;
