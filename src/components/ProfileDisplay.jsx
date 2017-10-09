import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchRepo } from "./../actions";
import { Button } from "react-bootstrap";
import Repos from './Repos';

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
    var listStyle = {
      listStyle: 'none'
    }

    var buttonStyle = {
      color: '#96EDFE'
    }
    return (
      <div>
          <ul>
          <Button style={buttonStyle} bsStyle="link" onClick={this.handleSubmit}>View More Repos</Button>
          {this.props.repos.map(function(repo){
            return  <li style={listStyle}><a key={repo.url} target="_blank" href={repo.url}>{repo.name}</a></li>
            })
          }
          </ul>
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
};

export default connect(mapStateToProps)(ProfileDisplay);
