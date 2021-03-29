import React  from 'react';
import { Link,useHistory } from "react-router-dom";
import './header.css';
import PropTypes from 'prop-types';

function Header({data}) {
	let history = useHistory();

  function handleClick() {
    history.push("/");
  }
	return(
		<div className="header"> 
			<ul className="navigation">
				<li><img src={data.logoImage} onClick={handleClick}/></li>
				<li className="navigation__title">  {data.title} </li>
				<Link to={`/profile/${data.firstName}`}>Welcome {data.firstName}</Link>
			</ul>
		</div>
	)
}

Header.propTypes = {
 data:PropTypes.object.isRequired
};
export default Header;