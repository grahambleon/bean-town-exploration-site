import React, { Component } from 'react';
import Review from '../components/review';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';
import RatingField from '../components/RatingField';


class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeTitle: '',
      placeRating: '',
      placeBody: ''
    }
    this.handleBody = this.handleBody.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleTitle(event) {
    let newTitle = event.target.value
      this.setState({ placeTitle: newTitle })
  }

  handleBody(event) {
    let newBody = event.target.value
      this.setState({ placeBody: newBody })
  }

  handleRating(event) {
    let newRating = event.target.value
      this.setState({ placeRating: newRating })
  }

  handleClear() {
    this.setState ({
      placeTitle: '',
      placeRating: '',
      placeBody: ''
    })
  }

  render() {
    console.log(this.state);

    return(
      <form className="form" onSubmit={this.handleClear}>
        <TitleField
          label="Review Title"
          title={this.state.placeTitle}
          handleTitle={this.handleTitle}
        />
        <BodyField
          label="Review Body"
          handleBody={this.handleBody}
          body={this.state.placeBody}
        />
        <RatingField
          label="Rating"
          handleRating={this.handleRating}
          rating={this.state.placeRating}
        />
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={this.handleClear}>Clear</button>
    </form>

    )
  }
}

export default FormContainer;
