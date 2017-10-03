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
          <ul>
          {this.props.repos.map(function(repo){
            console.log(repo);
            return
                    <li><a key={repo.url} target="_blank" href={repo.url}>{repo.name}</a></li>
                  })
        </ul>
        }
        <Button bsStyle="link" onClick={this.handleSubmit}>View Repos</Button>
        {this.props.isFetching && <div>Fetching...</div>}
        <br/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  // const repos = state;
  return {
    repos: state.repos,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps)(ProfileDisplay);
