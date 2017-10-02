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
      {profiles.map((profile) =>
        {profiles}
      )}
      <Button bsStyle="link" onClick={() => {dispatch(fetchRepo())}}>View Repos</Button>
      <br/>
    </div>
  );
}


const mapStateToProps = state => {
  // let info;
  const profiles = state;
  // if(!state.isFetching) {
  //   info = {
  //     name: state.name,
  //     html: state.html,
  //     profileId: state.profileId
  //   };
  // } else {
  //   info = {
  //     name: "",
  //     html: ""
  //   };
  // }
  return {
    profiles: profiles
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
