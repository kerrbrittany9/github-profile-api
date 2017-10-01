import React from  'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <div>
      <h1>Brittany Hardison</h1>
      <Link to="/">Projects</Link> | <Link to="/resume">Experience</Link>
    </div>

  )
}

export default Header;
