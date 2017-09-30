import React from "react";
import { connect } from "react-redux";
import { fetchRepo } from "./../actions";
import { Button } from "react-bootstrap";


const ProfileDisplay = ({ dispatch, profile }) => {
  var buttonStyle = {
    border: 'no-border'
  }
  return (
    <div>
      {profile.starred}
      <Button bsStyle="link" onClick={() => {dispatch(fetchRepo())}}>View Repos</Button>
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
