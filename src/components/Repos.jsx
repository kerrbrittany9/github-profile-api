import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

function Repos(props) {
  var buttonStyle = {
    border: 'no-border',
    fontSize: '12'
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
      <Button bsStyle="link" style={buttonStyle} onClick={props.handleHidingRepos}>Hide Repos</Button>
    </ul>
  </div>
  )
}
Repos.propTypes = {
  repos: PropTypes.object,
  handleHidingRepos: PropTypes.func
};

export default Repos;
