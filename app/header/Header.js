import React  from 'react';
import './header.css';

function Header({profile}) {
	return(
		<div className="header"> 
			<ul className="navigation">
				<li><img src={profile.logoImage}/></li>
				<li className="navigation__title"> Earthquake Zen Garden</li>
				<li> Welcome {profile.firstName}</li>
			</ul>
		</div>
	)
}

export default Header;