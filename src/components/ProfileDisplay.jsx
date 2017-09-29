import React from "react";
import { connect } from "react-redux";
import { fetchRepo } from "./../actions";


const ProfileDisplay = ({ dispatch, profile }) => {
  return (
    <div>
      <button onClick={() => {dispatch(fetchRepo())}}>View Repos</button>
      <br/>
      {profile}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    profile: state
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
