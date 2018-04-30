import React from 'react';

const Review = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.rating}</div>
      <div>{props.date}</div>
      <div>{props.body}</div>
    </div>
  )
}

export default Review;
