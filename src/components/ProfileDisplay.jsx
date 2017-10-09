import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchRepo } from "./../actions";
import { Button } from "react-bootstrap";
import Repos from  './Repos';
import * as types from "./../constants/ActionTypes";

class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHidingRepos = this.handleHidingRepos.bind(this);
  }

  handleSubmit(){
    this.props.dispatch(fetchRepo());
  }

  handleHidingRepos() {
    const { dispatch } = this.props;
    const action = {
      type: types.HIDE_REPOS,
    }
    dispatch(action);
  }

    render () {

    var buttonStyle = {
      border: 'no-border',
      color: '#96EDFE'
    }
    var listStyle = {
      listStyle: 'none'
    }


    return (
      <div>
        <Button style={buttonStyle} bsStyle="link" onClick={this.handleSubmit}>View More Repos</Button>
        <Repos
          repos = {this.props.repos}
          handleHidingRepos = {this.handleHidingRepos}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const repos = state;
  return {
    repos: state.repos
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
