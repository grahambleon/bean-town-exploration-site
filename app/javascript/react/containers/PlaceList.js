import React from 'react';
import PlaceTile from '../components/PlaceTile';

class PlaceList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      placeSelected: null
    }

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
        this.setState({ places: body });
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

 render(){
   let places = this.state.places.map((place)=>{
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
       />
     )
   })
  return(
    <div className = "wrpPage">
      <div className="indexCategory">
        <h2>Categories</h2>
        <ul>
          <li className="btn">Historical Sites</li>
          <li className="btn">Parks & Recreation</li>
          <li className="btn">Museums</li>
          <li className="btn">Sports</li>
        </ul>
      </div>
      <div className="indexlist">
        <h2>Places to Visit!</h2>
        <ul>
          {places}
        </ul>
      </div>
    </div>
  )
}
}

export default PlaceList;
