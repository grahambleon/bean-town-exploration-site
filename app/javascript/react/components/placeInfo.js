import React from 'react';
import { Link } from 'react-router';

const PlaceInfo = (props) => {
  return(
    <div>
      <div>
        {props.description}
      </div>
      <Link to={`/places/${props.id}`}>
        {props.link}
      </Link>
    </div>
  )
}
export default PlaceInfo
