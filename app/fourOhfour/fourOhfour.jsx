import React from 'react';
import error from '../../public/404.png';

import './fourOhfour.css';

function FourOhFour() {
  return (
    <div className="error">
      <img src={error} alt="404 not found!" />
    </div>
  );
}

export default FourOhFour;
