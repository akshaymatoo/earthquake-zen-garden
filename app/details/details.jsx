import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../components/card/card';
import './details.css';

function Details({ data }) {
  const { ID } = useParams();
  const allowList = ['Title', 'Magnitude', 'Time', 'Status', 'Tsunami', 'Type'];
  const [cardData, setCardData] = useState({});
  useEffect(() => {
    const rows = data.features;
    const dt = rows.filter((row) => {
      if (row.id === ID) return row;
    })[0];
    const o = new Intl.DateTimeFormat('en', {
      timeStyle: 'medium',
      dateStyle: 'medium',
    });
    setCardData({
      Title: dt.properties.title,
      Magnitude: dt.properties.mag,
      Time: o.format(dt.properties.time),
      Status: dt.properties.status,
      Tsunami: dt.properties.tsunami,
      Type: dt.properties.type,
    });
    return () => { };
  }, []);
  return (

    <div className="details">
      {
      (Object.prototype.hasOwnProperty.call(cardData, 'Time'))
        ? (
          <div className="details__card">
            <h3>{cardData.Title}</h3>
            {' '}
            <Card data={cardData} allowList={allowList} />
          </div>
        )
        : <div>Table data not set</div>
    }

    </div>
  );
}
Details.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Details;
