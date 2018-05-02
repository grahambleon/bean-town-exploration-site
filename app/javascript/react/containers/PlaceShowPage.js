import React, { Component } from 'react';
import Review from '../components/review';
import FormContainer from './FormContainer';

class PlaceShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: {},
      reviews: [],
      userId: '',
      placeId: this.props.params.id
    }
    this.addNewReview = this.addNewReview.bind(this);
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

  render () {
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

    return(
      <div>
        <h2>{this.state.place.name}</h2>
        <div className="address">
          <li>{this.state.place.street_address}</li>
          <li>{this.state.place.city}, MA</li>
          <li>{this.state.place.zip}</li>
        </div>
        <p className="description">
          {this.state.place.description}
        </p>

        <div className="submitted-reviews">
          {reviews}
        </div>

        <FormContainer
          addNewReview={this.addNewReview}
          placeId={this.state.place.id}
          userId={this.state.userId}
        />
      </div>
    )
  }
}

export default PlaceShowPage;
