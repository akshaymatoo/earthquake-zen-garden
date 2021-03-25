import React  from 'react';
import './header.css';

function Header({user}) {
	return(
		<div className="header"> 
			<ul className="navigation">
				<li>Home</li>
				<li className="navigation__title"> Earthquale Zen Garden</li>
				<li> Welcome {user}</li>
			</ul>
		</div>
	)
}

export default Header;