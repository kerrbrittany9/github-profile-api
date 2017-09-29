import React, { Component } from 'react';
import { fetchRepo } from './../actions';
import { connect } from 'react-redux';

class ProfileSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { _profileSearch } = this.refs;
    if(!_profileSearch.value.trim()) {
      return;
    }
    this.props.dispatch(fetchRepo(_profileSearch.value.trim()));
    _profileSearch.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter a repo here" ref="_profileSearch"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(ProfileSearch);
