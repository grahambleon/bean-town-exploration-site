import React, { Component } from 'react';
import Review from '../components/review';
import FormContainer from './form-container';

class PlaceShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }

    this.addNewReview = this.addNewReview.bind(this);

  }


componentDidMount() {
    let placeId = this.props.params.id
  fetch('/api/v1/places/${placeId}/reviews', {
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
      this.setState({ reviews: this.state.reviews.concat(body) });
    })
    .catch(error => console.error (`Error in fetch: ${error.message}`));
}


addNewReview(formPayload) {
  fetch('/api/v1/places/reviews', {
    method: 'POST',
    body: JSON.stringify(formPayload),
    credentials: 'same-origin'
  })
  .then(response => response.json())
  .then(body => {
    this.setState ({
      reviews: this.state.reviews.concat(body)
    })
  })
}



  render () {


    return(
      <FormContainer
        addNewReview={this.props.addNewReview}
      />
    )
  }
}

export default PlaceShowPage;
