import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.css';

function Header({ data }) {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <div className="header">
      <ul className="navigation">
        <li><img src={data.logoImage} onClick={handleClick} role="presentation" alt="logo" /></li>
        <li className="navigation__title">
          {' '}
          {data.title}
          {' '}
        </li>
        <Link to={`/profile/${data.firstName}`}>
          Welcome
          {data.firstName}
        </Link>
      </ul>
    </div>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Header;
