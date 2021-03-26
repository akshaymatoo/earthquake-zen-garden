import React from 'react';
import './profile.css';

function Profile(props){
	return (
		<div className='user'>
			Welcome { props.user}
		</div>
	)
}

export default Profile;