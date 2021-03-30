import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

function Card({ data, allowList }) {
  // have a similar DS for card
  const properties = data;

  return (
    <div className="card">
      {
      Object.entries(properties).map(([key, value]) => (
      // Pretty straightforward - use key for the key and value for the value.
      // Just to clarify: unlike object destructuring, the parameter names don't matter here.
        allowList.includes(key)
          ? (
            <div key={key} className="card__container">
              <div className="card__container__left">
                {key}
              </div>
              <div className="card__container__right">
                {value}
              </div>
            </div>
          ) : null
      ))
    }
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.object.isRequired,
  allowList: PropTypes.array.isRequired,
};

export default Card;
