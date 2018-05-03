import React from 'react';

const PlaceTile = props => {
  return (
    <li onClick={props.onClick}>
      <h3>{props.name}</h3>
    </li>
  )
}

export default PlaceTile;
