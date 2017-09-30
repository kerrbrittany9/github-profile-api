import React from "react";
import { connect } from "react-redux";
import { fetchRepo } from "./../actions";


const ProfileDisplay = ({ dispatch, profile }) => {
  return (
    <div>
      {profile.starred}
      <button onClick={() => {dispatch(fetchRepo())}}>View Repos</button>
      <br/>
    </div>
  );
}


const mapStateToProps = state => {
  const profile = state;
  console.log(profile);
  return {
    profile: profile.name
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
