import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {

return(
  <div>
   <p>{props.profile.repos.name}</p>
  </div>
)
}
Stats.propTypes = {
  profile: PropTypes.object
};

export default Stats;
