import React from 'react';
import PropTypes from 'prop-types';
import './fourOhfour.css';

function FourOhFour({ errorImage }) {
  return (
    <div className="error">
      <img src={errorImage} alt="404 not found" />
    </div>
  );
}
FourOhFour.propTypes = {
  errorImage: PropTypes.object.isRequired,
};
export default FourOhFour;
