import React from 'react';

const PlaceTile = props => {
  return(
    <ul>
      <li onClick={props.click}>{props.name}</li>
      <p>{props.description}</p>
    </ul>
  )
}

export default PlaceTile;
