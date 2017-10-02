import React from "react";
import { connect } from "react-redux";
import { fetchRepo } from "./../actions";
import { Button } from "react-bootstrap";


const ProfileDisplay = ({ dispatch, profiles }) => {
  var buttonStyle = {
    border: 'no-border'
  }
  return (
    <div>
      {profiles}
      <Button bsStyle="link" onClick={() => {dispatch(fetchRepo())}}>View Repos</Button>
      <br/>
    </div>
  );
}


const mapStateToProps = state => {
  const profiles = state.profiles;
  console.log(profiles);
  return {
    profiles: profiles
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
