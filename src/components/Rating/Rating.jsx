import React from 'react';
import PropTypes from 'prop-types';
import './rating.css';

const Rating = ({
  rating
}) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= rating ? "star on" : (index-0.5) <= rating ? "star half" : "star"}
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
