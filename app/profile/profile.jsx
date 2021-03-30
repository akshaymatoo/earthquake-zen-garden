import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';
import Card from '../components/card/card';

function Profile(props) {
  const allowList = ['First name', 'Last name', 'Phone', 'Email', 'Bio'];
  const userData = {
    'First name': props.user.firstName,
    'Last name': props.user.lastName,
    Phone: props.user.phone,
    Email: props.user.email,
    Bio: props.user.bio,
  };
  return (
    <div className="user__main">
      <h3>Profile</h3>
      <div className="user__container">
        <div className="user__container__left">
          <img src={props.user.avatarImage} />
        </div>
        <div className="user__container__right">
          <Card data={userData} allowList={allowList} />
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;