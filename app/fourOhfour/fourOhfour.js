import React from 'react';
import error from "../../public/404.png";
import { useHistory } from "react-router-dom";

import './fourOhfour.css';

function FourOhFour (){
	let history = useHistory();

  function handleClick() {
    history.push("/");
  }

	return(
		<div className='error'> 
			<img src={error} alt='404 not found!' onClick={handleClick}/>
		</div>
	)
}

export default FourOhFour;