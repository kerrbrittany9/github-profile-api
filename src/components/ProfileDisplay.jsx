import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchRepo } from "./../actions";
import { Button } from "react-bootstrap";
import Stats from './Stats';

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props.profile);
  }

  handleSubmit(){
    this.props.dispatch(fetchRepo());
  }


    render () {
    var buttonStyle = {
    border: 'no-border'
    }
    return (
      <div>
        
        <Button bsStyle="link" onClick={this.handleSubmit}>View Repos</Button>
        <br/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const profiles = state;
  console.log(profiles);
  return {
    profiles: profiles
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
