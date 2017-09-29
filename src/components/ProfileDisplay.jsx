import React from "react";
import { connect } from "react-redux";
import { fetchRepo } from "./../actions";


const ProfileDisplay = ({ dispatch, profile }) => {
  return (
    <div>
      <button onClick={() => {dispatch(fetchRepo())}}>View Repos</button>
      <br/>
      {profile.html}
    </div>
  );
}


const mapStateToProps = state => {
  const profile = state;
  return {
    profile: profile
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
