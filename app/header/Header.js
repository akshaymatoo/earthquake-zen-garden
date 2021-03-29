import React  from 'react';
import { Link,useHistory } from "react-router-dom";
import './header.css';
import PropTypes from 'prop-types';

function Header({navigation}) {
	let history = useHistory();

  function handleClick() {
    history.push("/");
  }
	return(
		<div className="header"> 
			<ul className="navigation">
				<li><img src={navigation.logoImage} onClick={handleClick}/></li>
				<li className="navigation__title">  {navigation.title} </li>

				<Link to={`/profile/${navigation.firstName}`}>Welcome {navigation.firstName}</Link>
			</ul>
		</div>
	)
}

Header.propTypes = {
  logoImage: PropTypes.string,
  firstName: PropTypes.string,
  title:PropTypes.string
};
export default Header;