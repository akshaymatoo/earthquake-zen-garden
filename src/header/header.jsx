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
    <>
      <ul className="header">
        <li><img src={data.logoImage} onClick={handleClick} role="presentation" alt="logo" /></li>
        <li className="header__title">
          {' '}
          {data.title}
          {' '}
        </li>
        <div className="header__name">
          <Link to={`/profile/${data.firstName}`}>
            Welcome
            {` ${data.firstName}`}
          </Link>
        </div>
      </ul>
    </>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Header;
