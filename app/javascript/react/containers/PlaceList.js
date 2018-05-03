import React from 'react';
import PlaceTile from '../components/PlaceTile';

class PlaceList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      placeSelected: null,
      placesShown: []
    }
  this.sortPlaces = this.sortPlaces.bind(this)
  this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    fetch('/api/v1/places.json')
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
          places: body,
          placesShown: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handleClick(id){
    if (this.state.placeSelected === null){
      this.setState({placeSelected: id})
    } else {
      this.setState({placeSelected: null})
    }
  }

  sortPlaces(event){
    let selectedCategory = this.state.places.filter((place) => {
      return (
        parseInt(place.category) == event.target.value
      )
    })
    this.setState({ placesShown: selectedCategory })
  }

 render(){
   console.log(this.state.placesShown);
   console.log(this.state.places);
   let places = this.state.placesShown.map((place)=>{
     let placeDescrip;
     if (place.id === this.state.placeSelected){
        placeDescrip = place.description
      }

    let handle = () => {this.handleClick(place.id)}

     return(
       <PlaceTile
        key = {place.id}
        id = {place.id}
        name = {place.name}
        onClick = {handle}
        description = {placeDescrip}
        photo={place.avatar}
       />
     )
   })
  return(
    <div className = "wrp-page">
      <div className="index-category">
        <h2>Categories</h2>
        <ul>
          <li className="btn" value="1" onClick={this.sortPlaces}>Historical Sites</li>
          <li className="btn" value="2" onClick={this.sortPlaces}>Parks & Recreation</li>
          <li className="btn" value="3" onClick={this.sortPlaces}>Museums</li>
          <li className="btn" value="4" onClick={this.sortPlaces}>Sports</li>
        </ul>
      </div>
      <div className="index-list">
        <h2>Places to Visit!</h2>
        <ul className="place-tile">
          {places}
        </ul>
      </div>
    </div>
  )
}
}

export default PlaceList;
