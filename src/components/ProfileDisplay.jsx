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
      profiles.map((profile) =>
        {profile}
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
    profiles: state
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
