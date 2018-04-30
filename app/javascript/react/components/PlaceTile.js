import React from 'react';

const PlaceTile = props => {
  return (
    <li onClick={props.onClick} className="placeTile">
      <h2 id="placeTileName">{props.name}</h2>
      <p id="placeTileDescp">{props.description}</p>
    </li>
  )
}

export default PlaceTile;
