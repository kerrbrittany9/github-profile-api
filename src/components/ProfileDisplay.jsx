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
          {this.props.repos.map(function(repo){
            return repo.name
          })
        }
        <Button bsStyle="link" onClick={this.handleSubmit}>View Repos</Button>
        <br/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  // const repos = state;
  return {
    repos: state.repos
  };
  console.log(repos);
};

export default connect(mapStateToProps)(ProfileDisplay);
