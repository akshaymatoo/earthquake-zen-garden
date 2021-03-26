import React from 'react';
import './profile.css';

function Profile(props){
	return (
		<>
		<h1>Profile</h1>
		<div className='user__container'>

			<div className='user__container__left'>
				<img src={props.user.avatarImage}/>
			</div>
			<div className='user__container__right'>
				<table>
					<tr>
						<td>First name</td>
						<td>{props.user.firstName}</td>
					</tr>
					<tr>
						<td>Last name</td>
						<td>{props.user.lastName}</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>{props.user.phone}</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>{props.user.email}</td>
					</tr>
					<tr>
						<td>Bio</td>
						<td>{props.user.bio}</td>
					</tr>
				</table>
			</div>
		</div>
		</>
	)
}

export default Profile;