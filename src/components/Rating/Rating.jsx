import React from 'react';
import PropTypes from 'prop-types';
import './rating.css';

function getClassName(index, rating) {
  if(index <= rating) return "star on"
  else if(index - 0.5 <= rating) return "star half"
  return "star"
}

const Rating = ({
  rating
}) => {
  return (
    <div data-testid="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={getClassName(index, rating)}
          >
          </span>
        );
      })}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
}


export default Rating;
