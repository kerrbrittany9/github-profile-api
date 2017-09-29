import React, { Component } from 'react';
import ProfileSearch from './ProfileSearch';
import { connect } from 'react-redux';


const ProfileDisplay = ({ dispatch, profile })=> {
  console.log(profile);
  let formAreaContent;
  if (profile.profileId === 0) {
    formAreaContent =
      <div>
        <p>Check out her repos</p>
      </div>
  } else {
    formAreaContent =
      <div>
        <p>Your results for {profile.profileSearch}</p>
        <p>{profile}</p>
      </div>
  }
  return (
    <div>
      <ProfileSearch/>
      <br/>
      {formAreaContent}
    </div>
  );
}


const mapStateToProps = state => {
  console.log(state);
  const profile = state;
  return {
    profile: profile
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
