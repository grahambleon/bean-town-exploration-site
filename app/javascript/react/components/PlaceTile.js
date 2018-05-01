import React from 'react';
import { Link } from 'react-router';

const PlaceTile = props => {
  return (
    <li className="place-tile" onClick={props.onClick}>
      <h3>{props.name}</h3>
      <p id="place-tile-descp">
        {props.description}
      </p>
      <Link to={`/places/${props.id}`}>
        Details
      </Link>
    </li>
  )
}

export default PlaceTile;
