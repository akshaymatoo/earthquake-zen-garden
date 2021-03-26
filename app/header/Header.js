import React  from 'react';
import { Link,useHistory } from "react-router-dom";
import './header.css';

function Header({navigation}) {
	let history = useHistory();

  function handleClick() {
    history.push("/");
  }
	return(
		<div className="header"> 
			<ul className="navigation">
				<li><img src={navigation.logoImage} onClick={handleClick}/></li>
				<li className="navigation__title"> Earthquake Zen Garden</li>

				<Link to={`/profile/${navigation.firstName}`}>Welcome {navigation.firstName}</Link>
			</ul>
		</div>
	)
}

export default Header;