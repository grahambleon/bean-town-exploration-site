import React from 'react';

const PlaceTile = props => {
  return (
    <li onClick={props.onClick}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </li>
  )
}

export default PlaceTile;

// <Link to = {`/places/${props.id}`}>
//   {props.name} Full Details
// </Link>
