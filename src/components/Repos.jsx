import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

function Repos(props) {
  var buttonStyle = {
    color: '#96EDFE'
  }
  var listStyle = {
    listStyle: 'none'
  }
return(
  <div>
    <ul>
      {props.repos.map(function(repo){
        return  <li style={listStyle}><a key={repo.url} target="_blank" href={repo.url}>{repo.name}</a></li>
        })
      }
      <button bsStyle="link" style={buttonStyle} onClick={props.handleHidingRepos}>Hide Repos</button>
    </ul>
  </div>
  )
}
Repos.propTypes = {
  repos: PropTypes.object,
  handleHidingRepos: PropTypes.func
};

export default Repos;
