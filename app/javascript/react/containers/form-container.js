import React, { Component } from 'react';
import Review from '../components/review';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';
import RatingField from '../components/RatingField';


class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewTitle: '',
      reviewRating: '',
      reviewBody: ''
    }
    this.handleBody = this.handleBody.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }


  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      title: this.state.reviewTitle,
      body: this.state.reviewBody,
      rating: this.state.reviewRating,
      place_id: this.props.params.id,
      user_id: current_user
    }
    this.props.addNewReview(formPayload)
    handleClear()
  }

  handleTitle(event) {
    let newTitle = event.target.value
      this.setState({ reviewTitle: newTitle })
  }

  handleBody(event) {
    let newBody = event.target.value
      this.setState({ reviewBody: newBody })
  }

  handleRating(event) {
    let newRating = event.target.value
      this.setState({ reviewRating: newRating })
  }

  handleClear() {
    this.setState ({
      reviewTitle: '',
      reviewRating: '',
      reviewBody: ''
    })
  }

  


  render() {


    return(
      <form className="form" onSubmit={this.handleFormSubmit}>
        <TitleField
          label="Review Title"
          title={this.state.reviewTitle}
          handleTitle={this.handleTitle}
        />
        <BodyField
          label="Review Body"
          handleBody={this.handleBody}
          body={this.state.reviewBody}
        />
        <RatingField
          label="Rating"
          handleRating={this.handleRating}
          rating={this.state.reviewRating}
        />
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={this.handleClear}>Clear</button>
    </form>

    )
  }
}

export default FormContainer;
